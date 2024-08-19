import React, { useEffect, useState } from "react";
import {
  teacherAdventure,
  artistAdventure,
  analystAdventure,
  finaleContent,
} from "src/constants";
import { roleSelection } from "src/assets";
import Button from "@mui/material/Button";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Link } from "react-router-dom";

//useEffect()

interface Chapter {
  image: string;
  prompt: {
    title: string;
    body: string;
  };
  options: {
    [key: string]: {
      q: string;
      a: string;
    };
  };
}

const Game: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [showOutcome, setShowOutcome] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAdventureComplete, setIsAdventureComplete] =
    useState<boolean>(false);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setCurrentChapter(0);
  };

  const handleOutcomeClick = (optionIndex: string) => {
    setShowOutcome(true);
    setSelectedOption(optionIndex);
  };

  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(isAdventureComplete);
    if (currentChapter < teacherAdventure.length - 1) {
      setShowOutcome(false);
      setCurrentChapter((prevChapter) => prevChapter + 1);
    } else {
      setIsAdventureComplete(true);
    }
  };

  const handleRestartClick = () => {
    setSelectedRole(null);
    setCurrentChapter(0);
    setIsAdventureComplete(false);
    setShowOutcome(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const adventures: { [key: string]: Chapter[] } = {
    teacher: teacherAdventure,
    artist: artistAdventure,
    analyst: analystAdventure,
  };

  const chapter: Chapter =
    adventures[selectedRole || "teacher"][currentChapter];

  const finale: {
    image: string;
    prompt: {
      title: string;
      body: string;
    };
  } | null = finaleContent[selectedRole || "teacher"];

  return (
    <>
      {!selectedRole && (
        <div className="rounded-3xl shadow-2xl p-10 max-w-8xl mx-auto mb-2">
          <div className="text-center justify-center">
            <p className="text-4xl text-center mb-5">
              Welcome to the Choose Your Adventure Module!
            </p>
            <img
              src={roleSelection}
              alt="role selection picutre"
              width="800px"
              className="mx-auto"
            />
            <p className="text-2xl text-center my-5 font-bold">Introduction</p>
            <p>
              Welcome to our interactive journey that challenges your moral
              compass in a world where Artificial Intelligence (AI) reigns
              supreme. In this thrilling choose-your-own-adventure game, you'll
              step into the shoes of a protagonist facing a myriad of decisions
              involving AI technology. Will you uphold ethical principles and
              safeguard humanity's well-being, or will you succumb to the allure
              of unchecked AI power?
            </p>
            <br />
            <p>
              As you navigate this digital landscape, you'll encounter dilemmas
              that will test your understanding of fairness, transparency, and
              the greater good. Your choices will shape the outcome of this
              narrative, determining whether AI becomes a force for good, a
              source of harm, or something in between. Prepare to embark on a
              thought-provoking journey where the decisions you make could
              reshape the future of AI ethics. The path is yours to choose, but
              remember, every choice comes with consequences. So, are you ready
              to navigate the maze of ethical AI, or will you be lost in the
              shadows of technological ambiguity? The adventure begins now.
            </p>
            <p className="text-2xl text-center my-5 font-bold">
              {" "}
              <VideogameAssetIcon fontSize="large" />
              How to play
            </p>
            <p>
              The game is simple! You begin by choosing the role you want to
              play as. You will be given a context outlining the situation you
              are in. <br />
              You will be given 3 decisions to choose from. Once you choose the
              decision you will be given an outcome. Will it be good or bad?
              Find out by playing!
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl mt-5">Select Your Role</p>

            <div className="grid grid-cols-3 my-5">
              <p>
                <SchoolIcon />
                <br />
                Jump into the game as a teacher. Did you know teachers have
                started utilising AI for their teaching in the real world? But
                have you ever thought of the consequences? Let's find out!
                <br />
              </p>
              <h1>
                <BusinessCenterIcon />
                <br />
                Consultancy is rife with choices, imagine how much easier it
                would be if you let AI make them for you! Jump into the business
                world feet first. There won’t be any negative consequences here!
                Right?!
              </h1>
              <h1>
                <ColorLensIcon />
                <br />
                Try your hand at creating art in the AI landscape. Will you
                create new and thought provoking ideas? Or will your crutch on
                AI be your downfall?
              </h1>
              <div className="flex justify-center px-5 my-5">
                {" "}
                <Button
                  variant="contained"
                  onClick={() => handleRoleSelect("teacher")}
                  style={{
                    fontSize: "20px",
                    padding: "15px 30px",
                    margin: "10px",
                  }}
                >
                  Teacher
                </Button>
              </div>
              <div className="flex justify-center px-5 my-5">
                <Button
                  variant="contained"
                  onClick={() => handleRoleSelect("analyst")}
                  style={{
                    fontSize: "20px",
                    padding: "15px 30px",
                    margin: "10px",
                  }}
                >
                  Business Analyst
                </Button>
              </div>
              <div className="flex justify-center px-5 my-5">
                <Button
                  variant="contained"
                  onClick={() => handleRoleSelect("artist")}
                  style={{
                    fontSize: "20px",
                    padding: "15px 30px",
                    margin: "10px",
                  }}
                >
                  Artist
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedRole && !isAdventureComplete && (
        <div className="rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto mb-2">
          <div className="flex p-4 pb-2 items-end justify-between rounded-lg mb-5">
            <p className="secondary-font">Your selected role: {selectedRole}</p>
            <p className="quiz-progress secondary-font">
              <span className="quiz-progress-num">{currentChapter + 1}</span>
              /6
            </p>
          </div>
          <div className="text-center justify-center">
            <p className="text-3xl text-center mb-5">{chapter.prompt.title}</p>
          </div>
          <div className="w-2/3 mx-auto flex justify-center items-center">
            {" "}
            <img src={chapter.image} alt="current Chapter Image" />
          </div>
          <div className="w-2/3 mx-auto justify-center items-center">
            {" "}
            <p className="text-3xl font-bold my-3">Context</p>
            <p className="text-xl">{chapter.prompt.body}</p>
          </div>

          {!showOutcome && (
            <>
              <p className="text-center text-3xl my-5 font-bold">
                Choose your decision!
              </p>
              <div className="grid grid-cols-3">
                {Object.keys(chapter.options).map((optionIndex) => (
                  <div className="flex justify-center px-5" key={optionIndex}>
                    <Button
                      variant="contained"
                      onClick={() => handleOutcomeClick(optionIndex)}
                      style={{ fontSize: "16px" }}
                    >
                      {chapter.options[optionIndex].q}
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
          {showOutcome && (
            <>
              <div className="w-2/3 mx-auto justify-center items-center">
                <p className=" text-2xl my-5 font-bold">
                  You have chosen:{" "}
                  <span className="text-2xl font-light">
                    {chapter.options[selectedOption].q}
                  </span>
                </p>
              </div>

              <div className="w-2/3 mx-auto justify-center items-center">
                <p className="text-center text-3xl my-5">
                  <PsychologyIcon fontSize="large" />
                  The outcome of your decision!
                </p>
                <div className="mt-4 text-center">
                  <p className="text-lg">{chapter.options[selectedOption].a}</p>
                </div>
                <div className="flex justify-center mt-4">
                  {currentChapter < teacherAdventure.length - 1 && (
                    <button
                      onClick={handleNextClick}
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Next Chapter
                    </button>
                  )}
                  {currentChapter === teacherAdventure.length - 1 && (
                    <button
                      onClick={handleNextClick}
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      See Ending!
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {isAdventureComplete && (
        <>
          <div className="rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto mb-2">
            <div className="flex p-4 pb-2 items-end justify-between rounded-lg mb-5">
              <p className="secondary-font">
                Your selected role: {selectedRole}
              </p>
              <p className="quiz-progress secondary-font">
                <span className="quiz-progress-num">Ending</span>
              </p>
            </div>
            <div className="text-center justify-center">
              <p className="text-3xl text-center mb-5">{finale.prompt.title}</p>
            </div>
            <div className="w-2/3 mx-auto flex justify-center items-center">
              {" "}
              <img src={finale.image} alt="current Chapter Image" />
            </div>
            <div className="w-2/3 mx-auto justify-center items-center">
              {" "}
              <p className="text-3xl font-bold my-3 text-center">
                Congratulations!
              </p>
              {finale.prompt.body.split("\n\n").map((paragraph, index) => (
                <p key={index} className="my-5">
                  {paragraph} <br />
                </p>
              ))}
              <p className="text-xl">
                To learn more about this real-world case and gain valuable
                insights into the consequences of such actions, we encourage you
                to read the following article:
                <p>
                  <a
                    href={finale.prompt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {finale.prompt.link}
                  </a>
                </p>
              </p>
              <img src={finale.prompt.finalImage} />
            </div>
            <div className="grid grid-cols-2 my-5 ">
              <div className="flex justify-center px-5">
                <Button
                  component={Link}
                  to="/"
                  variant="contained"
                  style={{ fontSize: "16px" }}
                >
                  Back to Home
                </Button>
              </div>
              <div className="flex justify-center px-5">
                <Button
                  onClick={() => handleRestartClick()}
                  variant="contained"
                  style={{ fontSize: "16px" }}
                >
                  Play Again!
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
