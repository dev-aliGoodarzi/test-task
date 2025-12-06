// React
import { useCallback } from "react";
// React

// Redux
import {
  useReduxDispatch,
  useReduxSelector,
} from "@/Providers/StateManagement/ReduxToolkit/Store";
import { getAsyncAllArticles } from "@/Providers/StateManagement/ReduxToolkit/Slices/ArticlesSlice/Articles.slice";
// Redux

// Hooks
import { useDebounce } from "@/Hooks/Optimization/useDebounce";
// Hooks

// Components
import Article from "./Article/Article";
import PendingAndErrorManager from "@/Components/Common/PendingAndErrorManager/PendingAndErrorManager";
import LocalArticle from "./LocalArticle/LocalArticle";
// Components

type T_ArticlesProps = {
  justAssigned?: boolean;
};

const Articles: React.FunctionComponent<T_ArticlesProps> = ({
  justAssigned,
}) => {
  const dispatch = useReduxDispatch();

  const {
    data: articles,
    isPending,
    isDone,
    isError,
  } = useReduxSelector((state) => state.Articles.allArticles);

  const localAuthors = useReduxSelector((state) => state.Authors.localAuthors);

  const getAllReviewers = useCallback(() => {
    if (justAssigned) return;
    dispatch(getAsyncAllArticles());
  }, [dispatch, justAssigned]);

  useDebounce(100, getAllReviewers);

  return (
    <div className="w-full col-span-1 ">
      <h2 className="text-lg font-semibold mb-3">
        {justAssigned ? "Assigned Articles" : "Unassigned Articles"}
      </h2>

      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={getAllReviewers}
        showAfterDone={
          <div className="space-y-3">
            {justAssigned ? (
              <>
                {Object.keys(localAuthors).map((item, index) => (
                  <LocalArticle
                    key={`${item}${index}`}
                    articles={localAuthors[item]}
                    writerName={item}
                  />
                ))}
              </>
            ) : (
              <>
                {articles.map((item, index) => (
                  <Article
                    key={`${index}${item.DOI}${item.abstract}`}
                    data={item}
                    disableDND={false}
                  />
                ))}
              </>
            )}
          </div>
        }
      />
    </div>
  );
};

export default Articles;
