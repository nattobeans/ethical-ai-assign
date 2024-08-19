import React, { useState, useEffect } from "react";
import PromptSelector from "./PromptSelector";
import BiasAIOutput from "./BiasAIOutput";
import { prepromptModels } from "src/constants";
import Loader from "src/components/Loader";
import Heading from "src/components/Heading";
import { MessageSquare } from "lucide-react";
import LightbulbIcon from "@mui/icons-material/LightbulbOutlined";

const MainContainer: React.FC = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(
    null
  );
  const [biasModelName1, setBiasModelname1] = useState<string>("");
  const [biasModelName2, setBiasModelname2] = useState<string>("");
  const [typedResponse1, setTypedResponse1] = useState<string>("");
  const [typedResponse2, setTypedResponse2] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state
  const [isOutputVisible, setIsOutputVisible] = useState<boolean>(false); // Track output visibility
  const [typingAnimationComplete, setTypingAnimationComplete] =
    useState<boolean>(false);

  const handleSelectPrompt = (prompt: string, modelIndex: number) => {
    setSelectedPromptIndex(modelIndex);
    setIsOutputVisible(false);
    setTypingAnimationComplete(false);
  };

  const handleGenerateOutput = () => {
    setTypedResponse1("");
    setTypedResponse2("");

    if (selectedPromptIndex !== null && selectedPromptIndex >= 0) {
      setIsLoading(true); // Show the loader
      setIsOutputVisible(true); // Show the output

      setBiasModelname1(prepromptModels[selectedPromptIndex].biasName1);
      setBiasModelname2(prepromptModels[selectedPromptIndex].biasName2);
      const response1 = prepromptModels[selectedPromptIndex].answer1;
      const response2 = prepromptModels[selectedPromptIndex].answer2;

      // Trigger typing effect for the responses

      setTimeout(() => {
        setIsLoading(false); // Hide the loader
        // Trigger typing effect for the responses
        startTypingAnimation(response1, setTypedResponse1);
        startTypingAnimation(response2, setTypedResponse2);

        setTimeout(() => {
          setTypingAnimationComplete(true);
        }, 6000); // Adjust the delay as needed
      }, 2000);
    }
  };

  // Function to simulate typing effect
  const startTypingAnimation = (
    text: string,
    setText: (text: string) => void
  ) => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 15);
  };

  useEffect(() => {
    // Reset typed responses when a new prompt is selected

    setTypedResponse1("");
    setTypedResponse2("");
    setIsOutputVisible(false);
    setTypingAnimationComplete(false);
  }, [selectedPromptIndex]);

  return (
    <div className="flex flex-col items-center justify-start">
      <Heading
        title="AI Ethics - Bias Analysis"
        description="See how AI models can be bias."
        icon={MessageSquare}
      />

      <div className="flex flex-col items-center space-x-2 mb-4">
        <PromptSelector
          prompts={prepromptModels.map((model) => model.prompt)}
          selectedPrompt={
            selectedPromptIndex !== null
              ? prepromptModels[selectedPromptIndex].prompt
              : null
          }
          onSelectPrompt={handleSelectPrompt}
        />
        <button
          onClick={handleGenerateOutput}
          className="bg-blue-500 text-white rounded px-3 py-2 text-sm hover:bg-blue-600 cursor-pointer"
          disabled={selectedPromptIndex === null}
        >
          Submit
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : isOutputVisible ? (
        <div>
          {selectedPromptIndex !== null && (
            <BiasAIOutput
              modelbias1={biasModelName1}
              modelbias2={biasModelName2}
              output1={typedResponse1}
              output2={typedResponse2}
            />
          )}
        </div>
      ) : null}
      {/* Additional text outside of the nested div */}
      {typingAnimationComplete && (
        <div className="rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto mb-2 mt-5">
          <h1 className="text-1xl text-center font-bold">
            <LightbulbIcon />
            What can we see from the 2 AI Outputs above?
          </h1>
          <p>
            {selectedPromptIndex !== null
              ? prepromptModels[selectedPromptIndex].summary
              : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
