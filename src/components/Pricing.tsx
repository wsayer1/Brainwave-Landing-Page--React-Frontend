import { motion } from "framer-motion";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { fadeInDown, fadeInUp } from "../lib/motion";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <motion.div
          className="hidden relative justify-center mb-[6.5rem] lg:flex"
          {...fadeInDown}
        >
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt=""
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt=""
              loading="lazy"
            />
          </div>
        </motion.div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <motion.div
          className="relative"
          {...fadeInUp}
        >
          <PricingList />
          <LeftLine />
          <RightLine />
        </motion.div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b focus-visible:ring-2 focus-visible:ring-color-1 focus-visible:outline-none"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
