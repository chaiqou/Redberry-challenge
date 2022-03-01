import React from "react";

const SplitContainer = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to left, black 50% , white 50%)",
      }}
    >
      {props.children}
    </div>
  );
};

export default SplitContainer;
