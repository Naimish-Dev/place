import React from "react";
import { MdDiamond } from "react-icons/md";

const Floor = ({ setIsModel }) => {
  const handleDownload = () => {
    const pdfUrl = "/assets/Brocher/Palace-Residences-DHE-Launch-Info.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The-Gateway-Sewri-EBrochure.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <div id="floor-plan" className=" py-14 px-2 bg-gray-100">
      <h2 className="text-3xl text-black font-semibold text-center mb-6">
        Floor Plan
      </h2>
      <div className="flex flex-col w-full md:flex-row items-start py-14">
        <div className="w-full  mx-auto">
          <img
            src={"/assets/floor/image-044.jpg"}
            className="object-cover h-[400px] w-full mx-auto "
          />
        </div>
        <div className="w-full px-2 md:px-8 mt-8 md:mt-0">
          <div className="mb-4">
            <p className="font-bold  mb-4"> Spacious Apartments</p>
            <ul className="flex gap-4">
              <li className="flex gap-1 items-center ">
                <MdDiamond />1 Bed
              </li>
              <li className="flex gap-1 items-center ">
                <MdDiamond />2 Bed
              </li>
              <li className="flex gap-1 items-center ">
                <MdDiamond />3 Bed
              </li>
            </ul>
          </div>
          <p className="font-bold  mb-4">Townhouses</p>
          <ul>
            <li className="flex gap-1 items-center ">
              <MdDiamond />2 Bed
            </li>
          </ul>
          <button
            onClick={() => {
              const token = sessionStorage.getItem("Token");
              if (token) {
                handleDownload();
              } else {
                setIsModel(true);
              }
            }}
            className="uppercase mt-5 px-3 py-3 hover:scale-105 transition-all duration-300 ease-in-out text-white bg-blue-600 text-sm font-extrabold leading-5 tracking-[0.21px]"
          >
            Download Floor Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floor;
