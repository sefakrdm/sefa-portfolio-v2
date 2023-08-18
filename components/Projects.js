import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

import { PiArrowUpRightDuotone } from 'react-icons/pi';


//* Data import
import projects from '@/data/projects.json';
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger);

    useIsomorphicLayoutEffect(() => {
      // Scrollbar.use(OverscrollPlugin);
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
        bodyScrollBar.addListener(ScrollTrigger.update);
  
        ScrollTrigger.defaults({ 
          scroller: scroller,
          pinType: 'transform'
        });		
    });

    useIsomorphicLayoutEffect(() => {
      return () => {
        const a = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-wrap",
            start: "-=400px bottom",
            end: "top center",
            scrub: 1
          },
        });
        a.fromTo(".projects-wrap",{
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
                trigger: ".projects-wrap",
                start: "-=400px bottom",
                end: "-=400px top",
                scrub: 1
            },
        });
        a2.fromTo(".project-card", {
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
      };
    }, []);
  return (
    <section id="projects" className="w-full container mx-auto projects-wrap xl:px-0 px-4">
        <div className="group p-8 bg-zinc-800 rounded-xxl relative scale-100 border-t border-zinc-700">
            <h2 className="uppercase text-2xl font-semibold">My Projects</h2>
            <div className={`grid grid-rows-1 gap-4 py-8 ${projects?.length <= 2 ? 'grid-cols-'+projects.length:'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'}`}>
                {projects?.map((project, index) =>(                    
                    <Link href={project.url} key={project.id} className={`group p-4 min-h-[150px] text-zinc-800 cursor-pointer rounded-xxl relative border-t border-zinc-600 flex justify-center items-center project-card`} style={{backgroundColor: project.card_color}}>
                        <span className="absolute top-5 left-5 font-semibold text-lg">{'.'+(index+1)}</span>
                        <PiArrowUpRightDuotone size={30} className="absolute top-5 right-5" />
                        <Image src={project.image} width="150" height="150" alt={project.name} />
                        <h3 className="text-xl font-semibold hidden">{project.name}</h3>
                        <span className="absolute bottom-5 left-5 text-sm">View Project</span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}
