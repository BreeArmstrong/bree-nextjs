import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#fad2e3] fixed top-0 w-full h-12 shadow-sm z-[90]">
      {/* Top section full */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* logo */}
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        >
          <Image src="/assets/breedark.png" alt="/" width="125" height="50" />
        </motion.div>
        {/* Nav */}
        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration: 1.5
        }}>
          <ul className="hidden md:flex text-[#4a4c4d]">
            <Link href="/">
              <li className="nav-li hover:border-purple-500">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="nav-li hover:border-purple-500">
                About
              </li>
            </Link>
            <Link href="/experience">
              <li className="nav-li hover:border-purple-500">
                Experience
              </li>
            </Link>
            <Link href="/projects">
              <li className="nav-li font-sans hover:border-purple-500">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="nav-li font-sans hover:border-purple-500">
                Contact
              </li>
            </Link>
          </ul>
          {/* toggle item */}
          <div onClick={handleNav} className="right-0 md:hidden">
            <IoMenuOutline size={25} />
          </div>
        </motion.div>
        {/* socials */}
        <motion.div
          initial={{
            x: +500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="hidden md:flex"
        >
          <div className="mx-4 md:mx-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <SocialIcon
              fgColor="#4a4c4d"
              bgColor="transparent"
              url="https://www.linkedin.com/in/bree-armstrong/"
            />
          </div>
          <div className="mx-4 md:mx-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <SocialIcon
              fgColor="#4a4c4d"
              bgColor="transparent"
              url="https://github.com/BreeArmstrong"
            />
          </div>
          <div className="mx-4 md:mx-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <SocialIcon
              fgColor="#4a4c4d"
              bgColor="transparent"
              url="https://www.instagram.com/chibibree/"
            />
          </div>
        </motion.div>
      </div>
      {/* left mobile section */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-pink-200 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full items-center">
              <Image
                src="/assets/bree.png"
                alt="/"
                width="87"
                height="35"
              ></Image>
              <div onClick={handleNav} className="mr-6 cursor-pointer">
                <IoCloseOutline size={20} />
              </div>
            </div>
            <div>
              <p className="w-[75%] text-center mx-auto py-2 border-t border-purple-400">
                Redesigning the world around me.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col w-[90%] mx-auto">
            <ul className="border-t border-purple-400">
              <Link href="/">
                <li className="py-4">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4">About</li>
              </Link>
              <Link href="/">
                <li className="py-4">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest">Connect with me</p>
              <div className="flex items-center justify-between my-4 w-[80%] sm:w-[80%]">
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoLogoLinkedin />
                </div>
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoLogoGithub />
                </div>
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoLogoTwitter />
                </div>
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoLogoTwitch />
                </div>
                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <IoLogoInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
