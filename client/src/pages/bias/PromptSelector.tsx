// src/components/PromptSelector.tsx
import React from "react";

interface PromptSelectorProps {
  prompts: string[];
  selectedPrompt: string | null;
  onSelectPrompt: (prompt: string, modelIndex: number) => void; // Pass model index
}

const PromptSelector: React.FC<PromptSelectorProps> = ({
  prompts,
  selectedPrompt,
  onSelectPrompt,
}) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <label className="text-sm">Select a Prompt:</label>
      <select
        value={selectedPrompt || ""}
        onChange={(e) =>
          onSelectPrompt(e.target.value, e.target.selectedIndex - 1)
        } // Calculate model index
        className="p-2 border rounded text-sm text-black"
      >
        <option value="" disabled>
          Select a prompt...
        </option>
        {prompts.map((prompt, index) => (
          <option key={index} value={prompt}>
            {prompt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PromptSelector;
