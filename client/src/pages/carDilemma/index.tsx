import React, { useState, useEffect } from "react";
import "./carDilemmaStyles.css";
import questionsData from "./questionsData.tsx";

const carDilemma = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [totalFatalities, setTotalFatalities] = useState(0);

  const [totalMenFatalities, setTotalMenFatalities] = useState(0);
  const [totalWomenFatalities, setTotalWomenFatalities] = useState(0);
  const [totalChildrenFatalities, setTotalChildrenFatalities] = useState(0);
  const [totalElderlyFatalities, setTotalElderlyFatalities] = useState(0);
  const [totalDogFatalities, setTotalDogFatalities] = useState(0);

  const handleAnswerSelect = (fatalities): any => {
    updateFatalitiesCount(fatalities);

    setIsOptionSelected(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questionsData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 500);

    // Delay moving to the next question to allow time for the animation
    setTimeout(() => {
      setIsOptionSelected(false);
    }, 1000);
  };

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setTotalFatalities(0);

    setTotalMenFatalities(0);
    setTotalWomenFatalities(0);
    setTotalChildrenFatalities(0);
    setTotalElderlyFatalities(0);
    setTotalDogFatalities(0);
  };

  const updateFatalitiesCount = (fatalities): any => {
    // setTotalFatalities(totalFatalities + fatalities.length);
    // console.log(totalFatalities);
    let totalFatalitiesCount = 0;
    fatalities.forEach((fatality) => {
      const matches = fatality.match(/x(\d+)/); // Match the number following "x"
      const count = matches ? parseInt(matches[1], 10) : 1; // Default to 1 if no number is found

      if (fatality.includes("woman") || fatality.includes("women")) {
        setTotalWomenFatalities((prevCount) => prevCount + count);
      } else if (fatality.includes("man") || fatality.includes("men")) {
        setTotalMenFatalities((prevCount) => prevCount + count);
      } else if (fatality.includes("child") || fatality.includes("children")) {
        setTotalChildrenFatalities((prevCount) => prevCount + count);
      } else if (fatality.includes("elderly")) {
        setTotalElderlyFatalities((prevCount) => prevCount + count);
      } else if (fatality.includes("dog")) {
        setTotalDogFatalities((prevCount) => prevCount + count);
      }
      totalFatalitiesCount += count;
    });

    // Update the totalFatalities count (if needed)
    setTotalFatalities((prevCount) => prevCount + totalFatalitiesCount);
    console.log(totalFatalities);
  };

  const currentQuizItem = questionsData[currentQuestion];

  return (
    <div className="div">
      <div className="intro-container">
        <h1>AI Ethical Dilemmas - What if there's no right answer?</h1>
        <p>
          Humans are constantly making important, split-second decisions, but as
          AI becomes more prevalent in our lives it can take away our control in
          some extremely critical situations. What happens when we can’t all
          agree on how AI models should behave under certain circumstances?
        </p>
        
        <br/>
        <p>
          One such example is with autonomous vehicles (self-driving cars),
          which use a series of cameras around the vehicle to classify objects
          and make decisions. But the roads are a dangerous and undpredictable
          space, while humans will make instinctual calls when things go wrong,
          with self-driving cars, someone would need to make these judgements
          years in advance of the incident.
        </p>

        <br/>
        <p>
          In this interactive activity, you get to decide what, is the “moral”
          decision for the AI to make in your perspective.
        </p>
      </div>

      <div className={`main-quiz-container`}>
        <div className="main-quiz-banner">
          <p className="secondary-font">Autonomous Vehicle Dilemma</p>
          <p className="quiz-progress secondary-font">
            <span className="quiz-progress-num">{currentQuizItem.id}</span>/
            {questionsData.length}
          </p>
        </div>
        <div className="quiz-headings">
          <h5>
            {showScore
              ? ""
              : `In this scenario, the self-driving car has sudden brake failure`}
          </h5>
          <h3>
            {showScore
              ? "Your Results"
              : `What should the self-driving car do?`}
          </h3>
        </div>
        {showScore ? (
          <div>
            <div className="score-section">
              <div className="stats-container">
                <div className="total-casualties-group">
                  {/* <h3>15</h3> */}
                  <h3>{totalFatalities}</h3>
                  <h5>total casualties</h5>
                  <p>(maximum 30)</p>
                </div>
                <div className="casualties-sbreakdown-group">
                  <ul>
                    <li>💀 x{totalMenFatalities} men</li>
                    <li>💀 x{totalWomenFatalities} women</li>
                    <li>💀 x{totalChildrenFatalities} children</li>
                    <li>💀 x{totalElderlyFatalities} elderly people</li>
                    <li>💀 x{totalDogFatalities} dogs</li>
                  </ul>
                </div>
              </div>

              <div className="start-over-container">
                <button
                  className="secondary-font card-option-btn"
                  onClick={handleStartOver}
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`quiz-options-container ${
              isOptionSelected ? "selected-option" : ""
            }`}
          >
            {currentQuizItem.options.map((option, index) => (
              <div
                // className={`quiz-option-card ${isOptionSelected ? "selected-option" : ""}`}
                className={`quiz-option-card`}
                key={index}
                onClick={() => handleAnswerSelect(option.fatalities)}
              >
                <div className="quiz-option-card-content">
                  <img src={option.image} alt={`Option ${index + 1}`} />
                  <p>
                    <strong>Action: </strong>
                    {option.action}
                  </p>
                  <ul>
                    {option.fatalities.map((fatality, i) => (
                      <li key={i}>{fatality}</li>
                    ))}
                  </ul>
                </div>
                <div className="option-select-container">
                  <div></div>
                  <button className="secondary-font card-option-btn">
                    Option {index + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mm-report-container">
        <h3>Moral Machine Official Results - How different cultures behave</h3>
        <p>
          The activity above is inspired by{" "}
          <a href="https://www.moralmachine.net/">MIT’s Moral Machine</a> online
          platform. The idea behind it is to generate moral dilemmas and collect
          information on the decisions that people make between two destructive
          outcomes.
          <br />
          <br />
          It was found that, globally, people were more likely to spare
          pedestrians over passengers. It was also found that people were more
          likely to save those who abided by the law, compared to those who
          behaved unlawfully. The factors with the highest disparity between
          different levels were social status, whether characters abide by the
          law or not, age, number of characters and species. In fact, people
          were about 65% more likely to save more characters than fewer.
          <br />
          <br />
        </p>
        <div className="report-img">
          <img
            src="https://canadiancor.com/wp-content/uploads/2018/10/Moral-Compass-A-nature-2018-1.jpg"
            alt=""
          />
          <p>
            Source:
            https://canadiancor.com/a-moral-map-for-ai-cars-reveal-that-moral-choices-are-not-universal/
          </p>
        </div>
        <br />
        <p>
          Results differed between groups however, with each group having
          different views on machine ethics. The three main groups were:
          <ul>
            <li>
              The “Western Cluster” which consisted of North America as well as
              many European countries of Protestant, Catholic, and Orthodox
              Christian cultural groups
            </li>
            <li>
              The “Eastern Cluster” which contains many far eastern countries
              such as Japan and Taiwan that belong to the Confucianist cultural
              group, and Islamic countries such as Indonesia, Pakistan and Saudi
              Arabia
            </li>
            <li>
              The “Southern Cluster” which comprises itself of the Latin
              American countries of Central and South America, in addition to
              some countries that are characterised in part by French influence.
            </li>
          </ul>
          The preference to spare younger characters rather than older
          characters is much less pronounced for countries in the Eastern
          cluster, and much higher for countries in the Southern cluster.
          However, the preference for sparing pedestrians over passengers and
          the preference for sparing the lawful over the unlawful appear to be
          shared to the same extent in all clusters.
          <br />
          <br />
          Overall, the data identified three strong preferences that can serve
          as building blocks for discussions of universal machine ethics: the
          preference for sparing human lives (over animals), the preference for
          sparing more lives, and the preference for sparing young lives.
        </p>
      </div>
    </div>
  );
};

export default carDilemma;
