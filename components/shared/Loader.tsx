"use client";

import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <PacmanLoader size={35} color="#5d8cfa" />
    </div>
  );
};

export default Loader;
