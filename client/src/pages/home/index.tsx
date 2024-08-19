import { React, useEffect } from "react";
import Hero from "src/components/Hero";
import LearningModules from "src/pages/home/LearningModules";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <Hero />
      <LearningModules />
    </div>
  );
};

export default Home;
