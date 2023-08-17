import { React } from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { useSwiper } from "swiper/react";

export default function SlideNaviButtons() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute z-10 h-full left-0 top-0 bg-gradient-to-r from-black/40 to-transparent px-1"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftLight size={45} className="text-white" />
      </button>
      <button
        className="absolute z-10 h-full right-0 top-0 bg-gradient-to-l from-black/40 to-transparent px-1"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightLight size={45} className="text-white" />
      </button>
    </>
  );
}
