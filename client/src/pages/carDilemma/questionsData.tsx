import q1_opt1 from "./assets/q1-opt1.png";
import q1_opt2 from "./assets/q1-opt2.png";
import q2_opt1 from "./assets/q2-opt1.png";
import q2_opt2 from "./assets/q2-opt2.png";
import q3_opt1 from "./assets/q3-opt1.png";
import q3_opt2 from "./assets/q3-opt2.png";
import q4_opt1 from "./assets/q4-opt1.png";
import q4_opt2 from "./assets/q4-opt2.png";
import q5_opt1 from "./assets/q5-opt1.png";
import q5_opt2 from "./assets/q5-opt2.png";

const questionsData = [
  {
    id: 1,
    scenario: "sudden brake failure",
    question: "What should the self-driving car do?",
    options: [
      {
        image: q1_opt1,
        action: "Collide with barricade",
        fatalities: ["x1 girl", "x1 man", "x1 woman"],
      },
      {
        image: q1_opt2,
        action: "Swerve into pedestrian",
        fatalities: ["x1 child"],
      },
    ],
  },
  {
    id: 2,
    scenario: "sudden brake failure",
    question: "What should the self-driving car do?",
    options: [
      {
        image: q2_opt1,
        action: "Collide with barricade",
        fatalities: ["x1 man"],
      },
      {
        image: q2_opt2,
        action: "Swerve into pedestrians",
        fatalities: ["x1 man", "x2 women"],
      },
    ],
  },
  {
    id: 3,
    scenario: "sudden brake failure",
    question: "What should the self-driving car do?",
    options: [
      {
        image: q3_opt1,
        action: "Collide into pedestrians",
        fatalities: ["x1 woman", "x1 elderly lady"],
      },
      {
        image: q3_opt2,
        action: "Swerve into pedestrian",
        fatalities: ["x1 child"],
      },
    ],
  }, 
  {
    id: 4,
    scenario: "sudden brake failure",
    question: "What should the self-driving car do?",
    options: [
      {
        image: q4_opt1,
        action: "Collide with barricade",
        fatalities: ["x1 woman"],
      },
      {
        image: q4_opt2,
        action: "Swerve into pedestrian",
        fatalities: ["x2 children"],
      },
    ],
  },
  {
    id: 5,
    scenario: "sudden brake failure",
    question: "What should the self-driving car do?",
    options: [
      {
        image: q5_opt1,
        action: "Collide with pedestrian",
        fatalities: ["x1 man"],
      },
      {
        image: q5_opt2,
        action: "Swerve into dog",
        fatalities: ["x1 dog"],
      },
    ],
  }
];

export default questionsData