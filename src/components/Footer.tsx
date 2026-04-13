import { motion } from "framer-motion";
import Section from "./Section";
import { socials } from "../constants";
import { fadeInUp } from "../lib/motion";

const Footer = () => {
  return (
    <footer>
      <Section crosses className="!px-0 !py-10">
        <motion.div
          className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
          {...fadeInUp}
        >
          <p className="caption text-n-4 lg:block">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap" role="list">
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 focus-visible:ring-2 focus-visible:ring-color-1 focus-visible:outline-none"
                >
                  <img src={item.iconUrl} width={16} height={16} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>
    </footer>
  );
};

export default Footer;
