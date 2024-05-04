// TradingStrategyTemplateDescription.jsx

import React, { useEffect, useRef, useState } from "react";
import AgloshoppingTemplateStats from "./AlgoshoppingTemplateStats";
const AlgoshoppingDescription = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
        >
          Open
        </button>
        <div
          className={`fixed left-0 top-0 flex items-center justify-center bg-dark/90 w-full h-full px-4 py-5 z-50 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="  rounded-[20px] bg-white px-8 py-12  dark:bg-dark-2 md:px-[70px] md:py-[60px] overflow-y-auto"
            style={{ maxHeight: "700px",width:"1200px" }} // Adjust the maxHeight as needed
          >
            <AgloshoppingTemplateStats Algos={props.Algos}></AgloshoppingTemplateStats>
            <div style={{position: "relative", top: "-125px", textAlign: "left" }}>
            {props.Algos.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

        </div>
      
          </div>
        </div>
    </>
  );
};

export default AlgoshoppingDescription;
