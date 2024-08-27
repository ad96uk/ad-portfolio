import React, {useState} from "react";
import Project from './Project';
import Modal from './Modal';
import Image from "next/image";

const projects = [
  { title: "VDPHOTO", src: "vdphoto.png", color: "#1F1E1E", tags: 'Css, PHP, JavaScript, Elementor'},
  { title: "DATACRAFT", src: "datacraft.png", color: "#1F1E1E", tags: 'PHP, ACF, JavaScript, Css'},
  { title: "WILL UPLOAD SOON", src: "null", color: "#1F1E1E", tags: 'null'},
];

export default function WorkSection() {
    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <>
<section className="flex flex-col w-full max-w-[1180px] pt-[100px] justify-end items-end px-6">
    <div className="w-full max-w-[1060px] flex flex-col justify-end">
      <h2 className="text-7xl leading-tight pb-[40px] text-end">
        Last <span className="text-greenAccent italic">{"{work}"}</span>
      </h2>
      {projects.map((project, index) => {
        return (
          <Project
            index={index}
            title={project.title}
            setModal={setModal}
            key={index}
            tags={project.tags}
          />
        );
      })}
  </div>
  <Modal modal={modal} projects={projects} />
</section>
<div className="flex w-full justify-start -mt-10">
    <Image
      className=""
      src="/gif-2.webp"
      width="200"
      height="200"
      alt="cat-gif"
    />
  </div>
  </>
    )
  }
