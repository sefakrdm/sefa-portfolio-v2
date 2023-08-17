import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

//* Components
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  const currentYear = new Date().getFullYear();

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ limitCallbacks: true })
    gsap.config({trialWarn: false});
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: false,
      smoothTouch: true,
      normalizeScroll: true
    });
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
          <Header />
          <main>
            <About />
            <Projects />
            <Works />
            <Contact />
          </main>
          <footer className="py-10 flex justify-center items-center">
            <div className="text-white">Copyright &copy; {currentYear} Sefa Karademir</div>
          </footer>
      </div>
    </div>
  );
}
