import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
  IoGameControllerOutline,
  IoLogoReact,
  IoMic,
  IoCodeSlashOutline,
} from "react-icons/io5";

// TODO: Make this into Scrolly Telling
const about = () => {
  return (
    <>
      <Head>
        <title>Bree | Web Dev</title>
        <meta
          name="description"
          content="A portfolio created using NextJs, Tailwind, and more"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Genos"
          rel="stylesheet"
        ></link>
      </Head>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
       className="overflow-scroll flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 items-center justify-evenly mx-auto">
        <h3 className="section-title">About</h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="-mb-20 mt-[45px] md:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-72 xl:w-[500px] xl:h-[600px] xl:mt-24"
          src="/assets/Bree-edit.jpg"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl tracking-wider">
            A <span className="underline decoration-[#4a4c4d/40]">bit</span>{" "}
            about me
          </h4>
          <p className="text-lg md:text-xl lg:text-2xl">
            I'm Bree, a self-taught Web Developer.{" "}
            <IoLogoReact className="inline fill-[#ca7bff]" /> I grew up with constantly and found myself becoming perserverant,
            determined, and goal driven. I find joy in playing video games with
            others and cosplaying some of the characters from the games as well
            as other media.{" "}
            <IoGameControllerOutline className="inline fill-[#ca7bff]" /> I also
            run a podcast with my husband for an up and coming MMORPG called
            Ashes of Creation where we talk about community topics.{" "}
            <IoMic className="inline fill-[#ca7bff]" /> I'm currently in my
            first industry role after working hard to get here and I continue my
            passion of learning, even now with this portfolio.{" "}
            <IoCodeSlashOutline className="inline fill-[#ca7bff]" /> I hope you
            enjoy all I have to share, and please don't hesitate to look around.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default about;
