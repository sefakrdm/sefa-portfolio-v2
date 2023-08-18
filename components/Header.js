import Image from "next/image";
import { useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

import {
    PiLinkedinLogoDuotone,
    PiTwitterLogoDuotone,
    PiGithubLogoDuotone,
    PiMediumLogoDuotone,
    PiUserFocusDuotone,
    PiCodeBlockDuotone,
    PiTerminalDuotone,
    PiPaperPlaneTiltDuotone
} from "react-icons/pi";


export default function Header() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const [scrollTextInner, setScrollTextInner] = useState(null);
    const [boxEl, setBoxEl] = useState([]);
    const [clickLink, setClickLink] = useState('');
    
    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".start-box", {
                scrollTrigger: {
                  trigger: ".start-box",
                  start: "+=350px center",
                  end: "+=350px top",
                  scrub: 1
                },
                duration: 1,
                scale: .7,
                opacity: 0,
                yPercent: 50,
                ease: "none"
            });
            
            gsap.fromTo(".head-item", {
                scale: 0.6,
                autoAlpha: 0,
            }, {
                stagger: 0.06,
                duration: 2,
                delay: 0.3,
                scale: 1,
                autoAlpha: 1,
                ease: "elastic.out(1, 0.5)"
            }, 0);
        }, ".header-wrap");
            return () => ctx.revert();
        // let headerBoxin = 
        //     gsap.fromTo(".g-box", { duration: 5, scale: -10, delay: 0.5, stagger: 0.2, ease: "elastic", force3D: true }, { scale: 1 });

    });
    
    // useIsomorphicLayoutEffect(() => {
    //     return () => {
    //         const headItems = gsap.timeline({
    //             scrollTrigger: {
    //               trigger: ".header-wrap",
    //               start: "bottom +=400px",
    //               end: "+=1000px bottom",
    //               scrub: 1,
    //               markers: true
    //             },
    //         });
    //         headItems.fromTo(".head-item", {
    //             scale: 1,
    //             autoAlpha: 1,
    //             ease: "none",
    //         }, {
    //             stagger: 1,
    //             duration: 4,
    //             delay: 1,
    //             scale: 0,
    //             autoAlpha: 0,
    //             ease: "none",
    //         }, 0);
    //     }
    // })
    
    useIsomorphicLayoutEffect(() => {
    
        if(clickLink != '') {
            const scrollTo = gsap.to(window, {
                scrollTo: { y: clickLink, autoKill: true, offsetY: (clickLink == '#projects' || clickLink == '#contact' ) ? '240':'' }
            });
        }

        
        setTimeout(() => {
            setClickLink('');
        }, 100);
    }, [clickLink]);
    
  return (
    <header className="w-full container mx-auto header-wrap xl:px-0 px-4">
        <div className="flex flex-col justify-center items-center py-20 my-10 start-box head-item">
            <div className="bg-zinc-600 rounded-full p-3 border-t border-zinc-700">
                <Image src="/sefa-avatar.png" alt="Sefa Karademir" width="100" height="100" className="avatar" />
            </div>
            <h1 className="text-4xl font-semibold mt-2 ">Sefa Karademir</h1>
            <h2 className="text-xl font-thin mt-1">Full Stack Developer</h2>
        </div>
        <div className="grid xl:grid-rows-1 xl:grid-cols-4 lg:grid-rows-1 lg:grid-cols-3 sm:grid-rows-1 md:grid-cols-2 sm:md:grid-cols-1 gap-4 nav-wrap">
            <div className="head-item">
                <div onClick={() => setClickLink('#about')} className="group p-4 min-h-[175px] bg-gray-100 text-zinc-800 rounded-xxl relative cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] border-t border-zinc-700 g-box">
                    <PiUserFocusDuotone size={40} className="absolute top-4 right-4" />
                    <h2 className="group-hover:-translate-y-5 group-hover:translate-x-5 font-semibold group-hover:font-bold absolute bottom-5 left-5 text-xl group-hover:text-3xl transition-all duration-300 ease-in-out">About</h2>
                </div>
            </div>
            <div className="head-item">
                <div onClick={() => setClickLink('#works')} className="group p-4 min-h-[175px] bg-red-200 text-zinc-900 rounded-xxl relative cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] border-t border-zinc-700 g-box">
                    <PiCodeBlockDuotone size={40} className="absolute top-4 right-4" />
                    <h2 className="group-hover:-translate-y-5 group-hover:translate-x-5 font-semibold group-hover:font-bold absolute bottom-5 left-5 text-xl group-hover:text-3xl transition-all duration-300 ease-in-out">Works</h2>
                </div>
            </div>
            <div className="head-item xl:row-span-2 lg:row-span-2">
                <div onClick={() => setClickLink('#projects')} className="group p-4 xl:min-h-full sm:min-h-[175px] min-h-[175px] bg-emerald-100 text-zinc-900 rounded-xxl relative cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] border-t border-zinc-700 g-box">
                    <PiTerminalDuotone size={40} className="absolute top-4 right-4" />
                    <h2 className="group-hover:-translate-y-5 group-hover:translate-x-5 font-semibold group-hover:font-bold absolute bottom-5 left-5 text-xl group-hover:text-3xl transition-all duration-300 ease-in-out">Projects</h2>
                </div>
            </div>
            <div className="head-item xl:col-span-2 lg:col-span-1">
                <div onClick={() => setClickLink('#contact')} className="group p-4 min-h-[175px] bg-amber-100 text-zinc-900 rounded-xxl relative cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] border-t border-zinc-700 g-box">
                    <PiPaperPlaneTiltDuotone size={40} className="absolute top-4 right-4" />
                    <h2 className="group-hover:-translate-y-5 group-hover:translate-x-5 font-semibold group-hover:font-bold absolute bottom-5 left-5 text-xl group-hover:text-3xl transition-all duration-300 ease-in-out">Contact</h2>
                </div>
            </div>
            <div className="head-item lg:col-start-3 lg:row-end-1">
                <div className="group p-4 min-h-[175px] bg-zinc-800 text-white rounded-xxl relative cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] border-t border-zinc-700 g-box overflow-hidden">
                    <PiPaperPlaneTiltDuotone size={60} className="absolute top-2 right-2 z-10 bg-zinc-800 p-3" />
                    <h2 className="group-hover:-translate-y-5 group-hover:translate-x-0 font-semibold group-hover:font-bold absolute bottom-5 left-5 text-xl transition-all duration-300 ease-in-out">info@sefakarademir.com.tr</h2>
                    <div className="capitalize text-xl text-zinc-500 z-0 flex w-fit relative top-0">
                        <div className="w-fit whitespace-nowrap scroll_text_inner hidden">
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                            <div className="pl-6 scroll_text_part">Wanna work together?</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:col-start-3 xl:row-end-2 flex flex-col justify-between gap-4">
                <div className="xl:flex hidden flex-warp justify-center items-start gap-4">
                    <div className="head-item">
                        <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                            <PiGithubLogoDuotone size={38} className="" />
                        </div>
                    </div>
                    <div className="head-item">
                        <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                            <PiLinkedinLogoDuotone size={38} className="" />
                        </div>
                    </div>
                    <div className="head-item">
                        <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                            <PiTwitterLogoDuotone size={38} className="" />
                        </div>
                    </div>
                    <div className="head-item">
                        <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                            <PiMediumLogoDuotone size={38} className="" />
                        </div>
                    </div>
                </div>
                <div className="head-item col-start-4 row-end-2 xl:min-h-fit md:min-h-[175px] flex flex-col md:justify-end bg-sky-100 rounded-xxl pl-5 py-4">
                    <span className="text-xl text-zinc-700">Based In</span>
                    <span className="text-xl font-semibold text-zinc-900">Izmir, Turkey</span>
                </div>
            </div>
        </div>
        <div className="flex xl:hidden flex-wrap justify-center items-start gap-4 mt-4">
            <div className="head-item">
                <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                    <PiGithubLogoDuotone size={38} className="" />
                </div>
            </div>
            <div className="head-item">
                <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                    <PiLinkedinLogoDuotone size={38} className="" />
                </div>
            </div>
            <div className="head-item">
                <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                    <PiTwitterLogoDuotone size={38} className="" />
                </div>
            </div>
            <div className="head-item">
                <div className="bg-zinc-800 rounded-xxl flex justify-center items-center border-t border-zinc-700 p-4 transition-all duration-300 ease-in-out scale-100 hover:scale-[0.975] cursor-pointer">
                    <PiMediumLogoDuotone size={38} className="" />
                </div>
            </div>
        </div>
    </header>
  )
}
