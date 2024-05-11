"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const Hero = ({ setIsModel }) => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

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
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-gray-300 text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className=" flex justify-between text-3xl bg-white p-2 py-4">
              <Link href={"/"} className="text-center">
                <img src="/assets/logo/logo.jpg" className="h-14" alt="logo" />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer text-black"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#about"}
              >
                About
              </Link>
              <Link href="../#photos">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Gallery
                </li>
              </Link>
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#price&payment-plan"}
              >
                Price & Payment Plan
              </Link>
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#floor-plan"}
              >
                Floor Plan
              </Link>

              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Location
                </li>
              </Link>
              <li
                onClick={() => setIsModel(true)}
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen bg-black text-white  py-4 px-2 bg-opacity-70">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/logo.jpg" className="h-16" alt="logo" />
          </Link>
          <div className=" gap-3 font-medium hidden sm:flex mr-4">
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#about"}
            >
              About
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#photos"}
            >
              Gallery
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#price&payment-plan"}
            >
              Price & Payment
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#floor-plan"}
            >
              Floor Plan
            </Link>

            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>
            <span
              onClick={() => setIsModel(true)}
              className=" hover:font-bold transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </span>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="assets/hero/15536.jpg"
          className="w-screen h-screen object-cover"
        />

        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-white flex gap-4 flex-col">
            <h2 className="text-xl text-center font-bold break-words break-all mx-1 sm:mx-0">
              The First-Ever 5-Star Branded Residence In Dubai Hills Estate{" "}
              <br /> <span className="text-3xl sm:text-5xl "> Emaar Palace Residences</span>
            </h2>
            <div className="flex  flex-col sm:flex-row px-2 flex-wrap justify-center gap-x-3 sm:gap-5">
              <button
                onClick={() => {
                  const token = sessionStorage.getItem("Token");
                  if (token) {
                    handleDownload();
                  } else {
                    setIsModel(true);
                  }
                }}
                className="uppercase mt-5 px-3 py-3 hover:scale-105 transition-all duration-300 ease-in-out text-black bg-gray-200 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Download Broucher
              </button>
              <button
                onClick={() => setIsModel(true)}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-white bg-blue-600 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Show your Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
