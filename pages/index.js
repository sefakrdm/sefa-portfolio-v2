import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

//* Components
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  const currentYear = new Date().getFullYear();

  useIsomorphicLayoutEffect(() => {
      // Scrollbar.use(OverscrollPlugin);
      const scroller = document.querySelector("[data-scrollbar]");
          const bodyScrollBar = Scrollbar.init(scroller, {
            renderByPixels: true,
            damping: 0.09,
            // plugins: {
            //  overscroll: {
            //    effect: "bounce"
            //  }
            // }
          });
    
          gsap.registerPlugin(ScrollTrigger);
    
          // code for gsap and smooth scrollbar work together
          ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
              if (arguments.length) {
                bodyScrollBar.scrollTop = value;
              }
              return bodyScrollBar.scrollTop;
            },
        });
        bodyScrollBar.addListener(ScrollTrigger.refresh); 
  });

  return (
    <div id="smooth-wrapper" data-scrollbar>
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
  );
}
