import React from "react";
import { logo } from "src/assets";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-10 h-10 relative animate-spin">
        <img src={logo} />
      </div>
      <p>AI is thinking...</p>
    </div>
  );
};

export default Loader;
