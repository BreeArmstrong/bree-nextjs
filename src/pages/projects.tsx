import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import ExperienceCard from "@/components/ExperienceCard";

// TODO: Make this into Scrolly Telling
const projects = () => {
  return (
    <>
      <Head>
        <title>Bree | Projects</title>
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
        initial={{ opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1.5}}
        className="relative overlow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto flex flex-col items-center h-screen"
      >
        <h3 className="section-title">Projects</h3>

        <div className="w-full max-h-[75%] mt-8 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </motion.div>
    </>
  );
};

export default projects;
