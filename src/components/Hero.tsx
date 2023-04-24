import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShape from "./BackgroundShape";
import HeroImage from "./HeroImage";


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Podcaster", "Cosplayer", "Gamer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-align-middle text-center overflow-hidden">
      <BackgroundShape />
      <HeroImage images={['/assets/profile.jpg']}/>

      <div className="z-10">
        <h2 className="font-sans text-md pb-2 tracking-widest">Front-End Web Developer</h2>
        <h1>
          I'm Bree, a <span className="mr-0">{text}</span> <Cursor cursorColor="#fad2e3" />
        </h1>
      </div>
    </div>
  );
}
