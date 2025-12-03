// React
import React, { useCallback, useState } from "react";
// React

// Components
import Reviewer from "./Reviewer/Reviewer";
import {
  useReduxDispatch,
  useReduxSelector,
} from "@/Providers/StateManagement/ReduxToolkit/Store";
import PendingAndErrorManager from "@/Components/Common/PendingAndErrorManager/PendingAndErrorManager";
// Components

// Providers
import { getAsyncAllAuthors } from "@/Providers/StateManagement/ReduxToolkit/Slices/AuthorsSlice/Authors.slice";
// Providers

// Hooks
import { useDebounce } from "@/Hooks/Optimization/useDebounce";
// Hooks

const ReviewerPool = () => {
  const [query, setQuery] = useState("");

  const dispatch = useReduxDispatch();

  const {
    data: reviewers,
    isPending,
    isDone,
    isError,
  } = useReduxSelector((state) => state.Authors.allAuthors);

  const getAllReviewers = useCallback(() => {
    dispatch(getAsyncAllAuthors());
  }, [dispatch]);

  useDebounce(100, getAllReviewers);

  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-3">Reviewers Pool</h2>

      {/* Controls */}
      <div className="space-y-2 mb-4">
        <label className="sr-only" htmlFor="expertise">
          Filter by expertise
        </label>

        <label className="sr-only" htmlFor="search">
          Search by name
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={getAllReviewers}
        showAfterDone={
          <div className="space-y-3">
            {reviewers
              .map((i) => i.author)
              .flat()
              .filter((i) =>
                i?.family?.toLowerCase()?.includes(query?.toLowerCase())
              )
              .map((item) => (
                <Reviewer key={item.ORCID} author={item} />
              ))}
          </div>
        }
      />
    </div>
  );
};

export default ReviewerPool;
