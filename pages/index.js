import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';

//* Components
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

export default function Home() {
  const currentYear = new Date().getFullYear();

  useIsomorphicLayoutEffect(() => {
    const scroller = document.querySelector(".scroller");
    let bodyScrollBar = Scrollbar.init(scroller, {
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
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.refresh);

    ScrollTrigger.defaults({
      scroller: scroller,
      pinType: "transform",
    });	
  })

  return (
    <div id="smooth-wrapper" className="scroller">
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
