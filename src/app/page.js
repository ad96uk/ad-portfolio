"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import WorkSection from "./components/WorkSection";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";

export default function Home() {
  SmoothScrolling();

  const [showFlag, setShowFlag] = useState(false);
  const [highlightTime, setHighlightTime] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <main className="flex flex-col w-full items-center bg-white100">
        <div
          id="hero-section"
          className="w-full h-[calc(100vh-68px)] bg-black100 flex flex-col justify-between"
        >
          <div className="flex-1 flex flex-col justify-center text-green200 py-3 gap-2">
            <h1 className="text-center text-6xl md:text-8xl leading-tight cursor-scale">
              Hi, i’m Anton, a <br />
              <span className="text-greenAccent italic">{"{web}"}</span>{" "}
              developer
            </h1>
          </div>
          <div className="flex justify-between items-end text-green200">
            <div className="w-0 md:w-[200px]"></div>
            <div className="mb-4 w-[400px] flex justify-center">
              <div className="items-center flex justify-center px-2">
                <span
                  className="flex items-center gap-1.5 px-2 cursor-default"
                  onMouseEnter={() => setShowFlag(true)}
                  onMouseLeave={() => setShowFlag(false)}
                >
                  Based in{" "}
                  <span
                    className={`transition-colors duration-500 ease-[cubic-bezier(.615,.19,.305,.91)] ${
                      showFlag ? "text-greenAccent" : "text-green200"
                    }`}
                  >
                    Liverpool
                  </span>{" "}
                  <span
                    className={`transition-all duration-500 ease-[cubic-bezier(.615,.19,.305,.91)] ${
                      showFlag ? "opacity-100 w-6" : "opacity-0 w-0"
                    } inline-block`}
                    style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                  >
                    🇬🇧
                  </span>
                </span>
                <p
                  onMouseEnter={() => setHighlightTime(true)}
                  onMouseLeave={() => setHighlightTime(false)}
                  className="cursor-default"
                >
                  local time{" "}
                  <span
                    className={`${
                      highlightTime ? "text-greenAccent" : "text-green200"
                    }`}
                  >
                    {formatTime(currentTime)}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/welcome.gif"
                width="200"
                height="200"
                alt="cat-gif"
              />
            </div>
          </div>
        </div>
        <WorkSection />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
