import React, { useEffect, useRef, useState } from "react";
import Broker from "../BrokerDroplist";
import { Link, Outlet } from "react-router-dom";
import "../../../CSS/Algoshopping.css";

const BrokingDetails = () => {
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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto py-20 ">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
          style={{ marginTop: "-200px" }}
        >
          Add Broker
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
          style={{ marginTop: "50px", zIndex: "1" }}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[1500px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
            style={{ border: "solid", height: "500px", overflowY: "auto" }}
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Add a Broker
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="Algoshoppingmain"
                style={{
                  border: "solid",
                  width: "70%",
                  borderWidth: "1px",
                  color: "blue",
                  position: "relative",
                  borderRadius: "5px",
                  height: "60px",
                  paddingTop: "10px",
                  alignItems: "center",
                  marginTop: "-10px",
                  zIndex: "2",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Broker />
              </div>
            </div>
            <div style={{ zIndex: "1", marginTop: "20px" }}>
              <Outlet>
                <div className="text-center">
                  <button
                    onClick={handleCloseModal}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrokingDetails;
