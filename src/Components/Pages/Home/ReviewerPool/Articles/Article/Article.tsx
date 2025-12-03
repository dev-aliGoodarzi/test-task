/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import React from "react";
// React

// Models
import { I_WorkArticle } from "@/Models/Work/Work.interfaces";
import { useCustomDND } from "@/Providers/DND/Hooks/dnd.hook";
// Models

type T_ArticleProps = {
  data: I_WorkArticle;
};

const Article: React.FunctionComponent<T_ArticleProps> = ({ data }) => {
  const { drop } = useCustomDND({
    onDrop: (d) => {
      console.clear();
      alert(`Element Dropped !\n\n\n ${JSON.stringify(d)}`);
    },
  });

  return (
    <div
      className="w-full max-w-sm bg-white rounded-2xl shadow-md p-5 space-y-3"
      ref={(d) => drop.dropRef(d) as any}
    >
      <h2 className="text-lg font-semibold leading-tight">{data.title[0]}</h2>

      <p className="text-sm text-gray-500">{data.abstract}</p>

      <div className="flex flex-wrap gap-2">
        {data?.title?.slice(1, 3).map((item, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        {data.published["date-parts"].toString()}
      </p>

      <p className="text-sm">
        <span className="font-medium">DOI</span>
        <span className="text-gray-700 ml-2">10-1234/abcd.2024.002</span>
      </p>
    </div>
  );
};

export default Article;
