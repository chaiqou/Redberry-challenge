import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Redberry - Thanks ";
  }, []);

  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div className="h-screen bg-black">
      <h1 className="absolute w-[1066px] text-[#FE3B1F] h-[191px] left-[472px] top-[444px] font-['Rowdies'] text-[96px] leading-[119px] flex items-center text-center">
        Thanks for Joining 😊
      </h1>
    </div>
  );
};

export default Thanks;
