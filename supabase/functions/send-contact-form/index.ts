import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, message });

    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Jméno, e-mail a zpráva jsou povinné údaje" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Save to database
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, phone, message });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save to database");
    }

    console.log("Contact submission saved to database");

    // Send notification email
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kontaktní formulář <info@cisteprostory.eu>",
        to: ["paukert.michal@gmail.com"],
        subject: `Nová zpráva z webu od: ${name}`,
        html: `
          <h2>Nová zpráva z kontaktního formuláře</h2>
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Neuvedeno"}</p>
          <hr />
          <h3>Zpráva:</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("Email API error:", errorText);
      // Don't throw - submission is saved, email is secondary
    } else {
      console.log("Email sent successfully");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
