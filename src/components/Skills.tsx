import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

// TODO: Grab the data and map it from a JSON file
// TODO: Animate on load

function Skills({}: Props) {
  return (
    <div className="w-[80%] h-screen mx-auto justify-center flex flex-col">
      <h2 className="text-center mt-16">My Skills So Far</h2>
      <div className="flex flex-row w-[80%] mx-auto my-8 justify-between items-center">
        <div className="w-[45%]">
          <span className="text-md">HTML</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              
              transition={{ duration: 1.4 }}
              className="skill-per html w-[85%]"
            >
              <span className="tooltip">85%</span>
            </motion.div>
          </div>
        </div>
        <div className="w-[45%]">
          <span className="text-md">CSS</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per css w-[80%]"
            >
              <span className="tooltip mx-4 text-[#fff]">80%</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[80%] mx-auto my-8 justify-between items-center">
        <div className="w-[45%]">
          <span className="text-md">JavaScript</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per javascripte w-[90%]"
            >
              <span className="tooltip mx-4 text-[#fff]">90%</span>
            </motion.div>
          </div>
        </div>
        <div className="w-[45%]">
          <span className="text-md">JQuery</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per jquery w-[30%]"
            >
              <span className="tooltip mx-4 text-[#fff]">30%</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[80%] mx-auto my-8 justify-between items-center">
        <div className="w-[45%]">
          <span className="text-md">ReactJS</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per react w-[70%]"
            >
              <span className="tooltip mx-4 text-[#fff]">70%</span>
            </motion.div>
          </div>
        </div>
        <div className="w-[45%]">
          <span className="text-md">NextJS</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per jquery w-[10%]"
            >
              <span className="tooltip mx-4 text-[#fff]">10%</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[80%] mx-auto my-8 justify-between items-center">
        <div className="w-[45%]">
          <span className="text-md">Sass</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per react w-[50%]"
            >
              <span className="tooltip mx-4 text-[#fff]">50%</span>
            </motion.div>
          </div>
        </div>
        <div className="w-[45%]">
          <span className="text-md">Svelte</span>
          <div className="skill-bar overflow-hidden">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="skill-per jquery w-[10%]"
            >
              <span className="tooltip mx-4 text-[#fff]">10%</span>
            </motion.div>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl">See my experience<Link href='/experience' className="hover:text-[#ca7bff]"> here</Link> and my projects using this code <Link href='/projects' className="hover:text-[#ca7bff]"> here</Link></p>
    </div>
  );
}

export default Skills;
