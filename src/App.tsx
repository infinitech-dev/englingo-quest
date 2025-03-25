
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransitionLayout from "@/components/TransitionLayout";

import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <TransitionLayout>
                <Index />
              </TransitionLayout>
            } 
          />
          <Route 
            path="/lessons" 
            element={
              <TransitionLayout>
                <Lessons />
              </TransitionLayout>
            } 
          />
          <Route 
            path="/practice" 
            element={
              <TransitionLayout>
                <Practice />
              </TransitionLayout>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
