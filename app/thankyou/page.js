"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const ThankYou = () => {
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
  return (
    <div>
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-orange-200  text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className=" flex justify-between  text-3xl bg-white p-2 py-4">
              <Link href={"/"} className="text-center">
                <img
                  src="/assets/logo/logoimg.webp"
                  className="h-14"
                  alt="logo"
                />
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
                href={"../#amenities"}
              >
                Amenities
              </Link>
              <Link href="../#overview">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Overview
                </li>
              </Link>
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#payment-plan"}
              >
                Payment Plan
              </Link>

              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Location
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-black bg-gradient-to-b from-orange-100  to-transparent py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/logoimg.webp" className="h-16" alt="logo" />
          </Link>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#amenities"}
            >
              Amenities
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#overview"}
            >
              Overview
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#payment-plan"}
            >
              Payment Plan
            </Link>

            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>
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

      <section className="min-h-[calc(100vh_-_76px)]  flex justify-center items-center dark:text-black ">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <div className="py-4 pb-8">
              <h1 className=" text-black text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
                Thank you for your interest.
              </h1>
              <p className="mb-5 text-lg font-medium text-center text-black ">
                Our sales executive will contact you shortly to provide all the
                necessary details.
              </p>

              <div className="text-sm font-semibold text-center text-black sm:text-base">
                Call us if you have any questions:
                <Link
                  className="mt-2 font-semibold text-center text-sm sm:text-base "
                  href={`tel:+971 506945852`}
                >
                  &nbsp; +971 506945852
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-orange-200 text-black text-md font-medium leading-5 tracking-[0.21px]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
