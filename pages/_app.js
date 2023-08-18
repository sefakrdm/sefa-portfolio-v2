import Head from 'next/head';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

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

  return (
    <>
      <Head>
        <title>Sefa Karademir - Full Stack Web Developer</title>
        <meta name="description" content="I am Sefa, 24 years old Full Stack Web Developer. I'm a passionate and enthusiastic software enthusiast with a strong desire to learn about new technologies." />
        <meta name="author" content="Sefa Karademir" />
        <meta name="publisher" content="Sefa 2023" />
        <meta property="og:image" content="/sefa-karademir.png" key="image" />
        <meta property="og:title" content="Sefa Karademir - Full Stack Web Developer" key="title" />
        <meta property="og:description" content="I am Sefa, 24 years old Full Stack Web Developer. I'm a passionate and enthusiastic software enthusiast with a strong desire to learn about new technologies." key="description" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div id="smooth-wrapper" className="scroller">
        <Component {...pageProps} />
      </div>
    </>
  )
}
