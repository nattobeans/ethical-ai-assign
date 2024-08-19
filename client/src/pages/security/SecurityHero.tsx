import React from "react";
import { securityArticles } from "src/constants";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const SecurityHero = () => {
  return (
    <>
      <section className="relative w-full h-fit mx-auto">
        <div className="sm:px-16 px-5 inset-0 top-[10px] max-w-6xl mx-auto flex flex-row items-start gap-5">
          <div className="sticky top-0">
            <h1 className="font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Security Concerns of AI Ethics
            </h1>
            <p className=" font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              Read our informative articles surrounding security issues AI
              brings
              <br />
            </p>
            <br />
            <p>Don't worry they aren't long at all!</p>
            <br />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {securityArticles.map((article, index) => (
            <div key={index}>
              <Link to={`/security/${index}`}>
                <ArticleCard {...article} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SecurityHero;
