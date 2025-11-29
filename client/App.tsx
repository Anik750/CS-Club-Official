import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Resources from "./pages/Resources";
import Problems from "./pages/Problems";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  createRoot(rootElement).render(<App />);
}
