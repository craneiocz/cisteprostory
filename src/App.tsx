import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CisteProstory from "./pages/CisteProstory";
import Vzduchotechnika from "./pages/Vzduchotechnika";
import MereniValidace from "./pages/MereniValidace";
import Servis from "./pages/Servis";
import OchranaUdaju from "./pages/OchranaUdaju";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ciste-prostory" element={<CisteProstory />} />
          <Route path="/vzduchotechnika" element={<Vzduchotechnika />} />
          <Route path="/mereni-a-validace" element={<MereniValidace />} />
          <Route path="/servis" element={<Servis />} />
          <Route path="/ochrana-udaju" element={<OchranaUdaju />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
