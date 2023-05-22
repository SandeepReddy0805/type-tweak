import React from "react";

function Scroll() {
  return (
    <>
      <div className="fixed grid place-items-center w-full bottom-6 cursor-pointer animate-bounce">
        <div className="flex flex-col items-center justify-center">
          <div className="font-font1">Scroll</div>
          <img className="w-12" src="down.svg" alt="scroll" />
        </div>
      </div>
    </>
  );
}

export default Scroll;
