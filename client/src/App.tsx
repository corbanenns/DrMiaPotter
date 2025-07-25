import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Conditions from "@/pages/conditions";
import Parents from "@/pages/parents";
import NewPatients from "@/pages/new-patients";
import Contact from "@/pages/contact";
import MyApproach from "@/pages/my-approach";
import Schedule from "@/pages/schedule";
import ConditionsTreated from "@/pages/conditions-treated";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/conditions" component={Conditions} />
      <Route path="/parents" component={Parents} />
      <Route path="/new-patients" component={NewPatients} />
      <Route path="/contact" component={Contact} />
      <Route path="/my-approach" component={MyApproach} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/conditions-treated" component={ConditionsTreated} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-cream-soft">
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
