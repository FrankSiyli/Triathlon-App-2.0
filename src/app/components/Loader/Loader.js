import React from "react";

const Loader = ({ error, isLoading }) => {
  return (
    <>
      <div className=" ">
        {error ? <p>failed to load</p> : null}
        {isLoading ? (
          <div className=" mt-20 flex flex-col text-center items-center">
            <p>Life is good</p>
            <p>Triathlon makes it better</p>
            <p className="mt-5">loading</p>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Loader;
