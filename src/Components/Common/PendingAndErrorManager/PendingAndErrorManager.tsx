// React
import React from "react";
// React



// Utils
import Spinner from "../Spinner/Spinner";
// Utils

type T_PendingAndErrorManager = {
  isPending: boolean;
  isError: boolean;
  isDone: boolean;

  onError: () => void;
  showAfterDone: React.ReactElement;

  pendingText?: string;

  reset?: {
    resetFunction: () => void;
  };
};

const PendingAndErrorManager: React.FunctionComponent<
  T_PendingAndErrorManager
> = ({
  isDone,
  isError,
  isPending,
  onError,
  showAfterDone,
  pendingText,
  reset,
}) => {
  return (
    <>
      {!isDone && (
        <div className="w-full flex flex-col ">
          {isPending && !isError && !isDone ? (
            <div className="flex flex-col items-center justify-center mt-5">
              <p className="w-full text-center text-sm rtl">
                Loading {pendingText}
              </p>
              <Spinner />
            </div>
          ) : null}

          {!isPending && isError && !isDone ? (
            <div className="flex flex-col items-center justify-center">
              <p className="w-full text-center text-sm "></p>
              <button
                className="px-6 w-32 py-1 text-sm bg-darkRed text-white rounded-lg"
                onClick={onError}
              >
                Try again
              </button>
              {reset && typeof reset.resetFunction === "function" && (
                <button
                  className="px-6 w-32 mt-4 py-1 text-sm bg-darkBlue text-white rounded-lg"
                  onClick={reset.resetFunction}
                >
                  Reset
                </button>
              )}
            </div>
          ) : null}
        </div>
      )}
      {isDone && !isPending && !isError ? showAfterDone : null}
    </>
  );
};

export default PendingAndErrorManager;
