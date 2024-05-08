import React, { useEffect, useRef, useState } from "react";
const ModalCourseTemplate = (props) => {
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
          className=" bg-primary px-6 py-3 text-base font-medium text-white"
          style={{borderRadius:"10px"}}
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
            className=" mx-auto rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px] overflow-y-auto"
            style={{ maxHeight: "800px",width:"1200px" }} 
          >
              <img src={props.image} alt="" className="w-full" />
            <div >{props.title}</div>
            <div >{props.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCourseTemplate;
