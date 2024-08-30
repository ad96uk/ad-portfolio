'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from 'next/navigation'; // для получения текущего пути

export default function Cursor() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const pathname = usePathname(); // Получаем текущий путь

  useEffect(() => {
    const cursor = cursorRef.current;
    const delay = 0.7;

    const handleMouseMove = (e) => {
      position.current.x = e.clientX - cursor.offsetWidth / 15;
      position.current.y = e.clientY - cursor.offsetHeight / 15;

      gsap.to(cursor, {
        duration: delay,
        x: position.current.x,
        y: position.current.y,
        ease: "power3.out",
        overwrite: "auto"
      });
    };

    const handleMouseEnter = (e) => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('grow');
        if (e.currentTarget.classList.contains('small')) {
          cursorRef.current.classList.add('grow-small');
          cursorRef.current.classList.remove('grow-large');
        } else if (e.currentTarget.classList.contains('large')) {
          cursorRef.current.classList.add('grow-large');
          cursorRef.current.classList.remove('grow-small');
        } else {
          cursorRef.current.classList.remove('grow-small', 'grow-large');
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('grow', 'grow-small', 'grow-large');
      }
    };

    // Добавляем глобальные обработчики событий
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.cursor-scale').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Удаляем глобальные обработчики событий
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.cursor-scale').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]); // Следим за изменением пути

  return (
    <span ref={cursorRef} className="cursor-style"></span>
  );
}
