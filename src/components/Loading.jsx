import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center p-10 items-center">
      <Audio
        height="150"
        width="150"
        radius="9"
        color="gray"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loading;
