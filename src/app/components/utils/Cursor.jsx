'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const delay = 0.7;

    const handleMouseMove = (e) => {
      position.current.x = e.clientX - cursor.offsetWidth / 2;
      position.current.y = e.clientY - cursor.offsetHeight / 2;
      
      gsap.to(cursor, {
        duration: delay,
        x: position.current.x,
        y: position.current.y,
        ease: "power3.out",
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <span ref={cursorRef} className="cursor-style"></span>
  );
}
