import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Drivers from "./pages/Drivers";
import DriverProfile from "./pages/DriverProfile";
import Teams from "./pages/Teams";
import TeamProfile from "./pages/TeamProfile";
import Races from "./pages/Races";
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
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/driver/:id" element={<DriverProfile />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/team/:id" element={<TeamProfile />} />
          <Route path="/races" element={<Races />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
