import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const NewsDetail = () => {
  const { id, slug } = useParams();
  const location = useLocation();
  const article = location.state;

  return (
    <div className="pt-24 md:px-28 px-5">
      <h2 className="pb-4">{article?.title}</h2>
      <span className="italic text-xs underline decoration-gold p-2 ">
        {article?.date} - {article?.author}
      </span>
      {article?.paragraph?.map((paragraph, index) => (
        <p className="pt-4 leading-7" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};
