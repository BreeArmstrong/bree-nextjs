import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#5f6264] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll">
      <motion.img
        className="rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/C4D0BAQFgPpzZdLswdA/company-logo_200_200/0/1532107070122?e=1690416000&v=beta&t=vBm6Uq0KvG3Ve-fCGLP0vBIO_Qx-njHHo6hWdpjrz_I"
      />
      <div className="px-0 md:px-10">
          <h4 className="text-3xl font-light">Front End Intern</h4>
          <p className="mt-1 font-semibold text-xl">Corvium</p>
          <div>
              <Image width={48} height={48} src="/" alt="/" />
              <Image width={48} height={48} src="/" alt="/" />
              <Image width={48} height={48} src="https://upload.wikimedia.org/wikipedia/commons/archive/8/8e/20230404233502%21Nextjs-logo.svg" alt="/" />
          </div>
          <p className="py-5 text-gray-300">Dates</p>
          <ul className="list-disc space-y-4 text-lg">
              <li> Summary point</li>
              <li> Summary point</li>
              <li> Summary point</li>
              <li> Summary point</li>
              <li> Summary point</li>
          </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
