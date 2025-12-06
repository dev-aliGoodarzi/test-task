// React
import React from "react";
// React

type T_Props = {
  containerClassName?: string;
};

const Divider: React.FunctionComponent<T_Props> = ({ containerClassName }) => {
  return (
    <p
      className={` w-full h-px border-t-0 bg-gray-500 mt-6 mb-4 ${containerClassName}`}
    >
      &nbsp;
    </p>
  );
};

export default Divider;
