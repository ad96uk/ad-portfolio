import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] md:h-[500px] box-border"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="px-4 md:px-0 fixed bottom-0 h-[400px] md:h-[500px] w-full bg-black100 flex flex-col items-center pt-[70px] md:pt-[100px] pb-[30px] md:pb-[50px]">
        <div className="flex flex-col items-end w-full max-w-[1180px] gap-2">
          <div className="cursor-scale">
          <h2 className="leading-3  text-5xl md:text-7xl pb-[20px] md:pb-[40px] text-green200">
            Let’s{" "}
            <span className="text-greenAccent italic">{"{collaborate}"}</span>
          </h2>
          </div>
          <p className="text-base md:text-xl text-green200">
            Fell free to reach out if you want to collaborate with me
          </p>
          <a
            className="text-lg md:text-xl text-green200 text-bold"
            href="mailto:anton.dvaravenka@outlook.com"
          >
            anton.dvaravenka@outlook.com
          </a>
          <div className="flex flex-row gap-4">
            <a target="_blank" href="https://github.com/ad98974771">
              <Image src="/git_black.png" width="48" height="48" alt="git" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/anton-dvaravenka/">
              <Image
                src="/linkedin_black.png"
                width="48"
                height="48"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-co w-full max-w-[1180px] justify-between mt-auto">
        <p className="text-base md:text-lg text-green200">2024 Anton Dvaravenka</p>
        <p className="text-base md:text-lg text-green200">Made by me 🧑‍🔬</p>
        </div>
      </div>
    </div>
  );
}
