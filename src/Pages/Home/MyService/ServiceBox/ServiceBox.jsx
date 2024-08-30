import React, { useEffect, useRef } from "react";
import "./ServiceBox.css";

const ServiceBox = ({ service }) => {
  // console.log(service);
  const { id, title, desc, image } = service;

  const modalRef = useRef(null);

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  let identifier = id;

  /**
   * Bring
   */

  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", 1);
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", ANGLE + 90);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    // <div className="w-auto h-[250px] shadow-lg p-4 relative">
    //   <div className="flex flex-col gap-6">
    //     <h1 className="text-xl text-black font-bold">{title}</h1>
    //     <p className="pText">{desc}</p>
    //   </div>
    //   <button className="btn btn-primary text-white absolute bottom-10 ">
    //     Read More
    //   </button>
    // </div>

    <div>
      {/* Modal start */}
      <dialog id="my_modal_3" ref={modalRef} className="modal w-full ">
        <div className="modal-box p-0 w-full  bg-[#5921B5]">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost bg-[#764EC3] hover:bg-[#764EC3]  absolute right-2 top-2  text-white z-20">
              ✕
            </button>
          </form>
          <div className="p-2 w-full">
            <img src={image} alt="" className="w-[450px] mx-auto rounded-md`" />
            <div className="p-12 text-center">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal end */}
      <div className={`glow-container-${identifier} glow-container`}>
        <article
          className={`glow-card glow-card-${identifier} h-fit cursor-pointer  border-[#2a2e5a] transition-all duration-300 relative bg-transparent text-gray-200 rounded-xl hover:border-transparent w-full`}
        >
          <div className="glows"></div>
          {/* {children} */}
          <div className="w-auto h-[250px] shadow-lg p-4 relative">
            <div className="flex flex-col gap-6">
              <h1 className="text-xl text-black font-bold">{title}</h1>
              <p className="pText">{desc}</p>
            </div>
            <button
              className="btn btn-primary text-white absolute bottom-10 "
              onClick={showModal}
            >
              Read More
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ServiceBox;
