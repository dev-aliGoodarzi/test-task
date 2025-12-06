// Components
import Divider from "@/Components/Common/Divider/Divider";
// Components

// Redux
import { useReduxSelector } from "@/Providers/StateManagement/ReduxToolkit/Store";
// Redux

const Header = () => {
  const { data: articles } = useReduxSelector(
    (state) => state.Articles.allArticles
  );

  const localAuthors = useReduxSelector((state) => state.Authors.localAuthors);
  return (
    <div
      className="w-full col-span-3  flex flex-col items-start justify-start
     sticky top-0 pt-2 z-99 bg-white"
    >
      <div className="w-full flex items-center justify-between ">
        <p className="text-lg font-semibold leading-tight">
          Peer Review Assignment System
        </p>
        <div className="flex items-center justify-between gap-x-4">
          <p>
            Total :{" "}
            <span className="font-semibold">
              {articles.length +
                Object.keys(localAuthors)
                  .filter(Boolean)
                  .map((item) => localAuthors[item].length)
                  .reduce((a, b) => a + b, 0)}
            </span>
          </p>
          <p>
            Unassigned :{" "}
            <span className="font-semibold">{articles.length}</span>
          </p>
          <p>
            In review : <span className="font-semibold">3</span>
          </p>
          <p>
            Completed :{" "}
            <span className="font-semibold">
              {Object.keys(localAuthors)
                .filter(Boolean)
                .map((item) => localAuthors[item].length)
                .reduce((a, b) => a + b, 0)}
            </span>
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
