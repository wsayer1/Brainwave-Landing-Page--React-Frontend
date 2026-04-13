import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Benefits = lazy(() => import("./components/Benefits"));
const Collaboration = lazy(() => import("./components/Collaboration"));
const Services = lazy(() => import("./components/Services"));
const Pricing = lazy(() => import("./components/Pricing"));
const Roadmap = lazy(() => import("./components/Roadmap"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#hero" className="skip-to-content">
        Skip to content
      </a>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Suspense>
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
          </Suspense>
        </main>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
      <ButtonGradient />
    </MotionConfig>
  );
};

export default App;
