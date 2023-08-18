import Link from 'next/link'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { PiPaperPlaneTiltDuotone } from 'react-icons/pi'

export default function Contact() {
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
      
        const a = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact-wrap",
            start: "-=1200px bottom",
            end: "-=900px top",
            scrub: 1
          },
        });
        a.fromTo(".contact-wrap",{
            yPercent: 35,
            scale: 0.2,
            autoAlpha: 0,
            ease: "none",
          }, {
            yPercent: 0,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
          }, 0);
        
        const a2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-wrap",
                start: "-=200px bottom",
                end: "-=700px top",
                scrub: 1
            },
        });
        a2.fromTo(".form-item", {
            scale: 0,
            autoAlpha: 0,
            ease: "none",
        }, {
            stagger: 0.3,
            duration: 1,
            delay: 1,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            }, 0);
    });
  return (
    <section
        id="contact"
        className="w-full container mx-auto contact-wrap"
    >
        <div className="group p-8 bg-zinc-800 rounded-xxl relative scale-100 border-t border-zinc-700">
            <h2 className="uppercase text-xl">GET IN TOUCH!</h2>
            <p className="text-[4rem] my-4">Wanna work together?</p>
            <div className="">
                <Link href="mailto:info@sefakarademir.com.tr" className="block border-2 border-cyan-200 text-cyan-200 py-4 px-5 w-fit rounded-xxl text-xl transition-all duration-300 ease-in-out hover:bg-cyan-200 hover:text-black">info@sefakarademir.com.tr</Link>
            </div>
            <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-8">
                <div className="form-item">
                    <input type="text" className="bg-cyan-200/20 outline-cyan-200 outline-1 p-8 text-lg rounded-xxl relative border-t border-zinc-700 w-full block" placeholder="Name" />
                </div>
                <div className="form-item lg:col-span-1 md:col-span-2">
                    <input type="text" className="bg-cyan-200/20 outline-cyan-200 outline-1 p-8 text-lg rounded-xxl relative border-t border-zinc-700 w-full block" placeholder="E-mail" />
                </div>
                <div className="form-item lg:col-span-1 md:col-span-3">
                    <input type="text" className="bg-cyan-200/20 outline-cyan-200 outline-1 p-8 text-lg rounded-xxl relative border-t border-zinc-700 w-full block" placeholder="Subject" />
                </div>
                <div className="form-item md:col-span-3 col-span-1">
                    <textarea className="bg-cyan-200/20 outline-cyan-200 outline-1 p-8 text-lg rounded-xxl relative border-t border-zinc-700 w-full block" rows="5" placeholder="Message">
                    </textarea>
                </div>
                <div className="form-item lg:col-start-4 lg:row-start-1 lg:row-span-2 md:col-span-3">
                    <button className="bg-cyan-200 text-zinc-800 p-8 text-2xl font-semibold rounded-xxl relative border-t border-zinc-700 w-full h-full uppercase flex flex-col items-center justify-center transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975]">
                        <PiPaperPlaneTiltDuotone size={45} className="mb-3" />
                        <span>Send</span></button>
                </div>
            </div>
        </div>
    </section>
  )
}
