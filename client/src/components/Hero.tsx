import React from "react";
import RobotCanvas from "./RobotCanvas";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-5 absolute inset-0 top-[10px] max-w-8xl mx-auto flex flex-row items-start gap-5">
        <div>
          <h1 className="font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Explore & Learn AI Ethics
          </h1>
          <p className="secondary-font font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ">
            Learn AI ethics with Ethical AI <br />
            through interactive learning materials
          </p>
        </div>
      </div>

      <RobotCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#learning-modules">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
