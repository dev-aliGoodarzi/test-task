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
// Components

const Articles = () => {
  const dispatch = useReduxDispatch();

  const {
    data: articles,
    isPending,
    isDone,
    isError,
  } = useReduxSelector((state) => state.Articles.allArticles);

  const getAllReviewers = useCallback(() => {
    dispatch(getAsyncAllArticles());
  }, [dispatch]);

  useDebounce(100, getAllReviewers);

  return (
    <div className="w-1/3 p-4">
      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={getAllReviewers}
        showAfterDone={
          <div className="space-y-3">
            {articles.map((item, index) => (
              <Article key={index} data={item} />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Articles;
