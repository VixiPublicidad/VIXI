import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  ScrollSmoother,
  SplitText,
);

export {
  gsap,
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
  useGSAP,
};
