"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import React from "react";
import Modal from "react-modal";

function Page() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button className="btn btn-secondary border-none disabled bg-red m-5 text-2xl">
        Beispielplan
      </button>

      <div className="flex min-h-screen mb-20 flex-col items-center  p-4">
        {/*----------------------weeks ----------------------*/}

        {weeks.map((week) => {
          return (
            <div
              key={uuidv1()}
              className="collapse collapse-arrow rounded-none mt-2"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title mb-2  bg-grey text-light text-3xl peer-checked:bg-red peer-checked:text-light ">
                {week}
              </div>
              <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
                {/*----------------------days------------------------ */}

                {days.map((day) => {
                  return (
                    <div
                      key={uuidv1()}
                      className="collapse collapse-arrow rounded-none mt-4 "
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title mb-2  bg-grey text-light text-xl peer-checked:bg-red peer-checked:text-light ">
                        {day}
                      </div>
                      <div className="collapse-content peer-checked:bg-light peer-checked:text-secondary-content">
                        {/*----------------------sessions------------------------ */}

                        {sessions.map((session) => {
                          return (
                            <div key={uuidv1()} className="text-center ">
                              <button
                                onClick={openModal}
                                className="btn w-full m-2 bg-dark text-light"
                              >
                                <div className="w-full flex justify-around">
                                  <div>{session.icon}</div>
                                  <div>{session.subTitle}</div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4 "
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>
                              </button>
                              <Modal
                                className="flex flex-col justify-center items-center text-dark bg-light w-screen h-screen"
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                ariaHideApp={false}
                                contentLabel="Example Modal"
                              >
                                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                                  Hello
                                </h2>
                                <div>I am a modal</div>
                                <form className="flex flex-col justify-center items-center">
                                  <button>tab navigation</button>
                                  <button>stays</button>
                                  <button>inside</button>
                                  <button>the modal</button>
                                  <button className="btn" onClick={closeModal}>
                                    close
                                  </button>
                                </form>
                              </Modal>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

const weeks = ["Woche 1", "Woche 2", "Woche 3", "Woche 4"];
const days = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];
const sessions = [
  {
    id: uuidv1(),
    title: "run",
    icon: "🏃‍♀️",
    subTitle: "base run",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "swim",

    icon: "🌊",
    subTitle: "base swim",
    details: ["1k", "5k", "1k"],
  },
  {
    id: uuidv1(),
    title: "bike",

    icon: "🚴‍♂️",
    subTitle: "base bike",
    details: ["1k", "5k", "1k"],
  },
];

export default Page;
