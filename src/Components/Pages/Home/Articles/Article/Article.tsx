/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import React from "react";
// React

// Models
import { I_WorkArticle } from "@/Models/Work/Work.interfaces";
import { useCustomDND } from "@/Providers/DND/Hooks/dnd.hook";
import { useReduxDispatch } from "@/Providers/StateManagement/ReduxToolkit/Store";
import { AuthorsSlice } from "@/Providers/StateManagement/ReduxToolkit/Slices/AuthorsSlice/Authors.slice";
import { ArticlesSlice } from "@/Providers/StateManagement/ReduxToolkit/Slices/ArticlesSlice/Articles.slice";
// Models

type T_ArticleProps = {
  data: I_WorkArticle;
  disableDND: boolean;
};

const Article: React.FunctionComponent<T_ArticleProps> = ({
  data,
  disableDND,
}) => {
  const dispatch = useReduxDispatch();

  const { drop } = useCustomDND({
    onDrop: (d: any) => {
      console.clear();
      console.log(d);
      dispatch(
        AuthorsSlice.actions.addArticleToSingleAuthor({
          authorName: d.family,
          article: data,
          onDone: () => {
            setTimeout(() => {
              dispatch(
                ArticlesSlice.actions.removeSingleArticle(JSON.stringify(data))
              );
            }, 100);
            return "";
          },
        })
      );
    },
  });

  return (
    <div
      className="w-full max-w-sm bg-white rounded-md shadow-md p-5 space-y-3"
      ref={disableDND ? null : (d) => drop.dropRef(d) as any}
    >
      <h2
        className="text-lg font-semibold leading-tight"
        dangerouslySetInnerHTML={{ __html: data.title[0] }}
      ></h2>

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
