import React from "react";
import { securitylogo } from "src/assets";
import { securityArticles } from "src/constants";
import { useParams } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();
  const article = securityArticles[articleId];

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-5 absolute inset-0 top-[10px] max-w-8xl mx-auto flex flex-row items-start gap-5">
        <div>
          <h1 className="font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            {article.title}
          </h1>
          <img src={article.imageSrc}></img>
          <p className="py-5">{article.date}</p>
          <p className="font-black lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ">
            {article.description}
          </p>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: article.content.replace(/\n/g, "<br />"),
            }}
          />
          <p className="my-10">Author: {article.author}</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
