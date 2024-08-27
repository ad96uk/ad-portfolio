"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
  { path: "/cv", label: "CV" },
];

export default function Menu() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.85,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container bg-black100" ref={container}>
      <div className="menu-bar w-full	flex justify-between items-center z-[1] px-6 py-3">
        <div className="menu-logo">
          <p 
          onMouseEnter={() => setShowGif(true)}
          onMouseLeave={() => setShowGif(false)}
          className="text-green200 text-xl cursor-help">say hello</p>
          {showGif && <Image className='absolute top-[calc(50%-110px)] right-[calc(50%-250px)]' src='/wazap.webp' width={500} height={210} alt="wazap" />}
        </div>
        <div className="menu-button">
          {" "}
          <button className="border-2 border-green200 px-[15px] py-[15px] rounded-[50px] text-green200">
            ‍‍🧑🏻‍💻 open for work
          </button>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="text-green200 text-xl">menu</p>
        </div>
      </div>
      <div className="menu-overlay flex flex-col fixed top-0 left-0 w-full h-screen z-[2] bg-green200">
        <div className="menu-overlay-bar flex flex-row w-full justify-between px-6 py-8 text-xl">
          <div className="menu-logo">
            <Link href="/">anton dvaravenka</Link>
          </div>
          <div className="menu-close text-black100 cursor-pointer" onClick={toggleMenu}>
            <p>close</p>
          </div>
        </div>
        <div className="menu-copy w-full flex flex-col items-center px-6">
          <div className="menu-links w-full max-w-[1180px]">
            <div className="menu-info flex flex-col items-start gap-2">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-info flex"></div>
        </div>
        <div className="menu-preview flex w-full justify-between items-end flex-[4] px-6 py-8">
          <div className="menu-info-col flex flex-col">
            <a href="#">gitHub</a>
          </div>
          <div className="menu-info-col flex flex-col">
            <a href="#">linkedIn</a>
          </div>
          <div className="menu-info-col flex flex-col">
            <a href="mailto:anton.dvaravenka@outlook.com">outlook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
