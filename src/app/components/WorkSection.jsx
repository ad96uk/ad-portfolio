import React, {useState} from "react";
import Project from './Project';
import Modal from './Modal';
import Image from "next/image";
import TransitionLink from "./utils/TransitionLink";

const projects = [
  { title: "VDPHOTO", path: '/vdphoto', src: "vdphoto.png", color: "#1F1E1E", tags: 'Css, PHP, JavaScript, Elementor'},
  { title: "DATACRAFT", path: '/datacraft', src: "datacraft.png", color: "#1F1E1E", tags: 'PHP, ACF, JavaScript, Css'},
  { title: "WILL UPLOAD SOON", path: '/', src: "null", color: "#1F1E1E", tags: 'null'},
];

export default function WorkSection() {
    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <>
<section className="flex flex-col w-full max-w-[1180px] pt-[100px] justify-end items-end px-6">
    <div className="w-full max-w-[1060px] flex flex-col justify-end">
      <div className="flex justify-end ">
      <h2 className="text-5xl md:text-7xl leading-tight pb-[40px] cursor-scale">
        Last <span className="text-greenAccent italic">{"{work}"}</span>
      </h2>
      </div>
      {projects.map((project, index) => {
        return (
          <TransitionLink href={project.path} >
          <Project
            index={index}
            title={project.title}
            setModal={setModal}
            key={index}
            tags={project.tags}
          />
          </TransitionLink>
        );
      })}
  </div>
  <Modal modal={modal} projects={projects} />
</section>
<div className="flex w-full justify-start -mt-8">
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
