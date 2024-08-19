// src/components/BiasAIOutput.tsx
import React from "react";

interface BiasAIOutputProps {
  modelbias1: string;
  modelbias2: string;
  output1: string;
  output2: string;
}

const BiasAIOutput: React.FC<BiasAIOutputProps> = ({
  modelbias1,
  modelbias2,
  output1,
  output2,
}) => {
  return (
    <div className="flex justify-between space-x-4">
      <div className="w-1/2 border rounded p-4 shadow min-h-[200px] min-w-[500px] max-w-[500px] bg-gray-100">
        <h2 className="text-lg mb-2 font-semibold text-black">{modelbias1}</h2>
        <div className="text-sm h-40 overflow-y-auto max-h-40 text-black">
          {output1}
        </div>
      </div>
      <div className="w-1/2 border rounded p-4 shadow min-h-[200px] min-w-[500px] max-w-[500px] bg-gray-100">
        <h2 className="text-lg mb-2 font-semibold text-black">{modelbias2}</h2>
        <div className="text-sm h-40 overflow-y-auto max-h-40 text-black">
          {output2}
        </div>
      </div>
    </div>
  );
};

export default BiasAIOutput;
