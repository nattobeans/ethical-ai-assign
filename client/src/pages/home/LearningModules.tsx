import React from "react";
import SectionWrapper from "src/hoc/SectionWrapper";
import { fadeIn, textVariant } from "src/utils/motion";
import { motion } from "framer-motion";
import { learningModules } from "src/constants";
import ModuleCard from "src/components/ModuleCard";
// import "./moduleCardStyles.css";

const LearningModules = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Learning Modules
        </p>
        <h2 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are the different modules
      </motion.p>

      {/* <div className="mt-20 grid grid-cols-2 gap-4">
        {learningModules.map((learningModule) => (
          <div key={learningModule.title} className="w-full mb-4">
            <ModuleCard {...learningModule} />
          </div>
        ))}
      </div> */}

      <div className="mt-20 grid grid-cols-2 gap-4">
        {learningModules.map((learningModule) => (
          <div key={learningModule.title} className="w-full mb-4">
            <ModuleCard {...learningModule} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(LearningModules, "learning-modules");
