import React from "react";

const ConclusionSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-4xl font-semibold mb-4">Conclusion</h2>

      <p>
        One might assume that the ideal solution is to make both the data and
        algorithms "fair." However, the challenge lies in defining the concept
        of "fairness." In fact, there are more than 20 distinct definitions of
        fairness, implying that selecting a single definition would necessitate
        trade-offs. It's essential to note that scholars like Jon Kleinberg,
        Sendhil Mullainathan, Manish Raghavan, Alexandra Chouldechova, and
        others have shown that a model cannot simultaneously adhere to numerous
        group fairness metrics, except under very specific conditions.
        Consequently, establishing a universal definition of fairness or a
        universally applicable metric is likely an unattainable goal.
      </p>

      <p>
        At this point, it is crucial to accompany AI algorithms with human
        judgment.
      </p>

      <h3 className="text-2xl font-semibold mt-4">Mitigating Bias</h3>

      <ul className="list-disc pl-6 mt-2">
        <li>Stay informed about ongoing AI bias research.</li>
        <li>Implement procedures to reduce bias in AI systems.</li>
        <li>
          Conduct comparisons between AI and human decisions to identify biases.
        </li>
        <li>
          Explore ways for humans and AI to collaborate effectively in
          mitigating bias.
        </li>
        <li>
          Allocate resources to support bias research, acquire more diverse
          data, and invest in education.
        </li>
        <li>
          Promote diversity within the AI field to enhance the capacity to
          address bias effectively.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">References</h3>
      <ol className="list-decimal pl-6 mt-2">
        <li>
          Gillis, A. S., & Pratt, M. K. (2023). machine learning bias (AI bias).
          Enterprise AI.{" "}
          <a
            href="https://www.techtarget.com/searchenterpriseai/definition/machine-learning-bias-algorithm-bias-or-AI-bias#:~:text=Machine%20learning%20bias%2C%20also%20known,machine%20learning%20(ML)%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            [1]
          </a>
        </li>
        <li>
          Manyika, J. (2022, November 17). What do we do about the biases in AI?
          Harvard Business Review.{" "}
          <a
            href="https://hbr.org/2019/10/what-do-we-do-about-the-biases-in-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            [2]
          </a>
        </li>
        <li>
          Tackling bias in artificial intelligence (and in humans). (2019, June
          6). McKinsey & Company.{" "}
          <a
            href="https://www.mckinsey.com/featured-insights/artificial-intelligence/tackling-bias-in-artificial-intelligence-and-in-humans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            [3]
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ConclusionSection;
