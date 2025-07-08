
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
