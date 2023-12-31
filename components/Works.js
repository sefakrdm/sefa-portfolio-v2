import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Link from "next/link";
import { PiCaretLeftDuotone } from "react-icons/pi";
import SlideNaviButtons from "./slideNext";

export default function Works() {
  const swiper = useSwiper();
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
          trigger: ".right-box-works",
          start: "top bottom",
          end: "+=200px center",
          scrub: 1
        },
      });
      a.fromTo(
        ".left-box-works",
        {
          xPercent: 50,
          ease: "none",
        },
        {
          xPercent: 0,
          ease: "none",
        },
        0
      ),
        a.fromTo(
          ".right-box-works",
          {
            xPercent: -50,
            ease: "none",
          },
          {
            xPercent: 0,
            ease: "none",
          },
          0
        );
      });
      mm.add("(max-width: 1024px)", () => {
        const a = gsap.timeline({
          scrollTrigger: {
            trigger: ".right-box-works",
            start: "top bottom",
            end: "-=600px top",
            scrub: 1
          },
        });
        a.fromTo(
          ".left-box-works",
          {
            xPercent: 50,
            ease: "none",
          },
          {
            xPercent: 0,
            ease: "none",
          },
          0
        ),
          a.fromTo(
            ".right-box-works",
            {
              xPercent: -50,
              ease: "none",
            },
            {
              xPercent: 0,
              ease: "none",
            },
            0
          );
        });
        return () => mm.revert();
  });
  return (
    <section
      id="works"
      className="w-full container mx-auto py-4 works-wrap"
    >
      <div className="grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          loop={true}
          // freeMode={{
          //     enabled: !0,
          //     momentumBounce: !1,
          //     momentumVelocityRatio: .3
          // }}
          className="works-slider block rounded-xxl relative left-box-works z-0 md:min-h-[350px] min-h-[200px]"
        >
          <SwiperSlide className="bg-zinc-800 border-t border-zinc-700">
            <Link href="#" className="block w-full image-container">
              <Image
                src="/hostriva-net.png"
                loading="lazy"
                layout="responsive"
                width={500}
                height={500}
                alt=""
                className="object-contain w-full relative"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-zinc-800 border-t border-zinc-700">
            <Link href="#" className="block w-full image-container">
              <Image
                src="/bersa-com-tr.png"
                loading="lazy"
                layout="responsive"
                width={500}
                height={500}
                alt=""
                className="object-contain w-full relative"
              />
            </Link>
          </SwiperSlide>
          <SlideNaviButtons />
        </Swiper>
        <div className="group bg-orange-300 rounded-xxl text-zinc-800 relative border-t border-zinc-700 flex items-end justify-between right-box-works z-10 md:min-h-[350px]">
          <div className="flex lg:flex-row flex-col items-center justify-center h-full">
            <PiCaretLeftDuotone size={60} className="mr-1 lg:rotate-0 rotate-90" />
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="text-4xl font-semibold leading-tight">
                Powerful Touches in My Work
              </h2>
            </div>
          </div>
          <Image src="/avatar-3.png" width="300" height="300" alt="" />
        </div>
      </div>
    </section>
  );
}
