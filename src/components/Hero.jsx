import { curve, heroBackground ,robot,p,bg} from "../assets";

import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          The Future of Online Gaming {` `}
            <span className="inline-block relative">
            Mahakal Gaming{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
         <p className="body-1 max-w-3xl mx-auto mb-6 text-white  lg:mb-8">
  Play thrilling games, stake and win big. 
  Discover a world where gaming pays off, literally! Experience the unique twist of winning rewards.
</p>
          <Button href="#features" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
  <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
    <div className="relative bg-n-8 rounded-[1rem]">
      <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

      <div className="aspect-[16/9] rounded-b-[0.9rem] overflow-hidden md:aspect-[16/9] lg:aspect-[16/9] xl:aspect-[16/9]">
  <img
    src={p}
    className="w-full h-full object-cover z-10"
    alt="AI"
  />
</div>

      <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

   <ScrollParallax isAbsolutelyPositioned>
  <Notification
    className="absolute -left-[5.5rem] bottom-[7.5rem] bg-n-9/40 backdrop-blur rounded-2xl sm:flex"
    title="Betting on IPL 2024"
  />
</ScrollParallax>

<ScrollParallax isAbsolutelyPositioned>
  <Notification
    className="absolute -right-[5.5rem] bottom-[11rem] w-[18rem] bg-n-9/40 backdrop-blur rounded-2xl sm:flex"
    title="Live IPL 2024 Scores"
  />
</ScrollParallax>
    </div>
  </div>

  <Gradient />

  <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
  <img
  src={bg}
  className="w-full"
  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
  alt="hero"
/>
  </div>

  <BackgroundCircles />
</div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
