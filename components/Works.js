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
      damping: 0.09,
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

    let ctx = gsap.context(() => {

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
      }, ".works-wrap");
        return () => ctx.revert();
  });
  return (
    <section
      id="works"
      className="w-full container mx-auto py-4 works-wrap xl:px-0 px-4"
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
          className="works-slider block bg-zinc-800 rounded-xxl relative border-t border-zinc-700 left-box-works z-0 min-h-fit max-h-fit"
        >
          <SwiperSlide>
            <Link href="#" className="flex justify-center items-center">
              <Image
                src="/hostriva-net.png"
                width={700}
                height={700}
                alt=""
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#" className="flex justify-center items-center">
              <Image
                src="/bersa-com-tr.png"
                width={700}
                height={700}
                alt=""
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
          <SlideNaviButtons />
        </Swiper>
        <div className="group bg-orange-300 rounded-xxl text-zinc-800 relative border-t border-zinc-700 flex items-end justify-between right-box-works z-10">
          <div className="flex lg:flex-row flex-col items-center justify-center h-full">
            <PiCaretLeftDuotone size={60} className="mr-1 lg:rotate-0 rotate-90" />
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="text-3xl font-semibold uppercase">
                Works
              </h2>
            </div>
          </div>
          <Image src="/avatar-3.png" width="300" height="300" alt="" />
        </div>
      </div>
    </section>
  );
}
