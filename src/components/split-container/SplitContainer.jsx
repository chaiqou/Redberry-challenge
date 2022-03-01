import React from "react";

const SplitContainer = (props) => {
  return (
    <div
      style={{
        background: "linear-gradient(to left, black 50% , white 50%)",
      }}
      className="h-screen w-screen"
    >
      {props.children}
    </div>
  );
};

export default SplitContainer;
