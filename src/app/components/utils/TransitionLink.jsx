"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ children, href, ...props }) {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();

    const transitionOverlay = document.querySelector(".transition-overlay");

    if (transitionOverlay) {
      gsap.set(transitionOverlay, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        visibility: "visible",
      });


      await gsap.to(transitionOverlay, {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });
    }

    router.push(href);


    if (transitionOverlay) {
      await sleep(0);
      gsap.set(transitionOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      gsap.to(transitionOverlay, {
        duration: 1.25,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(transitionOverlay, { visibility: "hidden" });
        },
      });
    }
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
}
