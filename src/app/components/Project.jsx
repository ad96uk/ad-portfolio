"use client";
import React from "react";

export default function Project({ index, title, setModal, tags}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center border-t-[1px] py-12 border-greenGrey cursor-pointer [transition:all_0.2s]
hover:opacity-50"
    >
      <h2
        className="hover:-translate-x-[10px] text-[48px] m-0 font-normal [transition:all_0.4s]"
      >
        {title}
      </h2>
      <p className="text-end leading-tight w-[100px] [transition:all_0.4s] font-light hover:translate-x-[10px] last:border-b-[1px_solid_rgb(201,_201,_201)]">
      {tags}
      </p>
    </div>
  );
}
