'use client'
import React,{useState,useEffect} from "react";
import Image from "next/image";



const Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [highlightTime, setHighlightTime] = useState(false)
  useEffect(() => {
    const updateTime = () => {
        setCurrentTime(new Date()); 
    };
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval)
  }, [])
  
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  
    return (
    <div className="w-full h-[calc(100vh-68px)] bg-black100 flex flex-col justify-between">
      <div className="flex-1 flex flex-col w-full justify-center text-green200 py-3 gap-2">
        <a href="mailto:anton.dvaravenka@outlook.com" className="text-center text-[6vw] cursor-scale">anton.dvaravenka@outlook.com</a>
        <p className="text-xl text-center">reach out anytime</p>
      </div>
      <div className="flex justify-between items-end text-green200">
        <div className="w-[0px] md:w-[200px]"></div>
        <div className="pb-4 w-[200px] flex justify-center">
        <p 
                onMouseEnter={() => setHighlightTime(true)}
                onMouseLeave={() => setHighlightTime(false)}
              className="cursor-default"
              >
                local time{" "}
                <span
                className={`${highlightTime ? 'text-greenAccent' : 'text-green200'}`}>
                  {formatTime(currentTime)}
                </span>
                </p>
        </div>
        <div>
          <Image src="/cat-p.gif" width="200" height="200" alt="cat-gif" />
        </div>
      </div>
    </div>
  );
};

export default Page;
