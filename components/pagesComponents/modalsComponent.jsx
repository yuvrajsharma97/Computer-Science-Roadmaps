import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext } from "react";

const ModalsComponent = ({ modals }) => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <React.Fragment>
      {modals.map((modal) => (
        <div
          key={modal.id}
          className="flex flex-col md:flex-row justify-evenly items-center w-full text-white">
          <button
            className={"btn bg-yellow text-primary hover:text-fourth w-2/6 my-2 hover:border-fourth"}
            onClick={() => document.getElementById(modal.id).showModal()}>
            {modal.buttonText}
          </button>
          <dialog id={modal.id} className="modal">
            <div
              className={` modal-box ${
                !modal.content.videoSrc
                  ? "xs:10/12 md:w-6/12"
                  : " w-11/12 max-w-5xl"
              }`}>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {modal.content.title && (
                <h3 className="font-bold text-md">{modal.content.title}</h3>
              )}
              {modal.content.links && (
                <ul className="p-5">
                  {modal.content.links.map((link, index) => (
                    <li key={index} className="list-disc underline py-2">
                      <a
                        target="_blank"
                        href={link.href}
                        rel="noopener noreferrer">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {modal.content.videoSrc && (
                <div className="p-5">
                  <iframe
                    width="100%"
                    height="500px"
                    className="rounded-lg"
                    src={modal.content.videoSrc}
                    title={modal.content.videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              )}
            </div>
          </dialog>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ModalsComponent;
