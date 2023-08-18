import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/autoplay";


//* Data import
import skills from '@/data/skills.json';
import Image from "next/image";

export default function Projects() {

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
            trigger: ".skills-wrap",
            start: "-=400px bottom",
            end: "-=800px top",
            scrub: 1
          },
        });
        a.fromTo(".skills-wrap",{
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
        
        // const a2 = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: ".skills-wrap",
        //       start: "-=400px bottom",
        //       end: "-=100px top",
        //       scrub: 1
        //     },
        //   });
        //   a2.fromTo(".skill-card", {
        //     scale: 0,
        //     autoAlpha: 0,
        //     ease: "none",
        //   }, {
        //     stagger: 0.3,
        //     duration: 1,
        //     delay: 1,
        //     scale: 1,
        //     autoAlpha: 1,
        //     ease: "none",
        //   }, 0);
      });
  return (
    <section id="skills" className="w-full container mx-auto skills-wrap pb-4">
        <div className="group p-8 bg-zinc-800 rounded-xxl relative scale-100 border-t border-zinc-700">
            <h2 className="uppercase text-2xl font-semibold">Skills & Expertise</h2>
            <div className="py-8">

                <Swiper
                    modules={[Autoplay, FreeMode, Navigation]}
                    slidesPerView={5}
                    spaceBetween={15}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    className="skills-slider block z-0 cursor-pointer"
                >
                    {skills?.map((skill, index) =>(                    
                        <SwiperSlide key={index}>
                            <div className="flex flex-col justify-center items-center rounded-xxl bg-zinc-700 border-t border-zinc-600 p-5 skill-card">
                                <Image src={skill.image} width="85" height="85" alt={skill.name} />
                                <span className="font-semibold text-zinc-300 text-lg mt-4">{skill.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
