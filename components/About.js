import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { PiCaretRightDuotone } from "react-icons/pi";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const scroller = document.querySelector(".scroller");
    let bodyScrollBar = Scrollbar.init(scroller, {
      renderByPixels: true,
      damping: 0.075,
      // plugins: {
      //  overscroll: {
      //    effect: "bounce"
      //  }
      // }
    });

    gsap.registerPlugin(ScrollTrigger);

    bodyScrollBar.setPosition(0, 0);
    bodyScrollBar.track.xAxis.element.remove();

    // code for gsap and smooth scrollbar work together
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({
      scroller: scroller,
      pinType: "transform",
    });	

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const a = gsap.timeline({
        scrollTrigger: {
          trigger: ".right-box",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });
      a.fromTo(".left-box", {
        xPercent: 50,
        ease: "none",
      }, {
        xPercent: 0,
        ease: "none",
      }, 0),
      a.fromTo(".right-box", {
        xPercent: -50,
        ease: "none",
      }, {
        xPercent: 0,
        ease: "none",
      }, 0);
    });
    mm.add("(max-width: 1024px)", () => {
      const a = gsap.timeline({
        scrollTrigger: {
          trigger: ".right-box",
          start: "top bottom",
          end: "-=400px top",
          scrub: 1,
        },
      });
      a.fromTo(".left-box", {
        xPercent: 50,
        ease: "none",
      }, {
        xPercent: 0,
        ease: "none",
      }, 0),
      a.fromTo(".right-box", {
        xPercent: -50,
        ease: "none",
      }, {
        xPercent: 0,
        ease: "none",
      }, 0);
    });
    return () => mm.revert();
});

  return (
    <section
      id="about"
      className="w-full container mx-auto py-4 about-wrap"
    >
      <div className="grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="group bg-emerald-300 rounded-xxl text-zinc-800 relative border-t border-zinc-700 flex items-end justify-between left-box z-10 md:min-h-[350px]">
          <Image src="/avatar-2.png" width="300" height="300" alt="" />
          <div className="flex lg:flex-row flex-col items-center justify-center h-full">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="text-4xl font-semibold leading-tight">Who is this Creative One?</h2>
            </div>
            <PiCaretRightDuotone size={60} className="ml-1 lg:rotate-0 rotate-90" />
          </div>
        </div>
        <div className="group p-6 bg-zinc-800 rounded-xxl relative border-t border-zinc-700 right-box z-0 md:mim-h-[350px]">
          <p className="text-2xl text-zinc-300 py-4 leading-snug">
            I am Sefa, 24 years old Full Stack Web Developer. I&apos;m a
            passionate and enthusiastic software enthusiast with a strong desire
            to learn about new technologies. I spend most of my time creating
            projects with new technologies and improving myself in the field of
            web3. I specialise in technologies such as React.js, React Native,
            Next.js, Vue.js, Nuxt.js, Bootstrap and Tailwind CSS.
          </p>
          <Image src="/signature.png" width="150" height="90" alt="Sefa Kardemir" />
        </div>
      </div>
    </section>
  );
}
