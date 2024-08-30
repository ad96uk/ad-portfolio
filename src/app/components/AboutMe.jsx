import React, {useState} from "react";
import Image from "next/image";

export default function AboutMe() {
const [showGif, setShowGif] = useState(false);
const [showGifDog, setShowGifDog] = useState(false);

  return (
    <section className="flex flex-col w-full py-[150px] items-center bg-white relative px-4 md:px-0">
      <div className="w-full max-w-[1180px]">
        {" "}
        <div className="flex"><h2 className="text-5xl md:text-7xl leading-tight pb-[20px] md:pb-[40px] cursor-scale">
          <span className="text-greenAccent italic">{"{About}"}</span> me
        </h2></div>
        <div id="desktop" className="hidden lg:block">
        <div className="flex flex-col gap-2 pb-10 cursor-scale small"><span className="inline-flex  text-[26px] md:text-[40px] items-center gap-2"><p className="">I’m passionate about <span
        onMouseEnter={() => setShowGif(true)}
        onMouseLeave={() => setShowGif(false)}
        className="font-bold pulsating text-[26px] md:text-[40px]">developing</span></p><Image src="/icons8-developer.gif" width="40" height="40" alt="gif" /><p className="text-[26px] md:text-[40px]">digital solutions that</p> 
        </span>
        <span className="inline-flex text-[40px] items-center gap-2"><p className="text-[26px] md:text-[40px]">prioritise user</p><Image src="/icons8-user.gif" width="40" height="40" alt="gif" /> <p className="text-[26px] md:text-[40px]">experience, ensuring every design</p><Image src="/icons8-figma.gif" width="40" height="40" alt="gif" />
        </span>
        <p className="text-[26px] md:text-[40px] ">is both functional and accessible.</p></div>
        <div className="flex flex-col gap-2 cursor-scale small">
        <span className="inline-flex text-[26px] md:text-[40px] items-center gap-2"><p className="text-[26px] md:text-[40px]">My goal is to build apps and websites</p><Image src="/icons8-wordpress (1).gif" width="40" height="40" alt="gif" /><p className="text-[26px] md:text-[40px]">that offer</p></span>
        <p className="text-[26px] md:text-[40px]">users a genuinely <span
        onMouseEnter={() => setShowGifDog(true)}
        onMouseLeave={() => setShowGifDog(false)}
        className="font-[600] pulsating-2 text-[26px] md:text-[40px]">engaging</span> and intuitive experience.</p>
        </div>
        </div>
        <div id="mobile" className="block lg:hidden">
          <p className="text-2xl pb-3">I’m passionate about <span className="font-bold pulsating">developing</span> digital solutions that prioritise user experience, ensuring every design is both functional and accessible.
          </p>
          <p className="text-2xl">My goal is to build apps and websites that offer users a genuinely <span className="font-bold pulsating">engaging</span> and intuitive experience.</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-0 p-0">
        <Image
          src="/heIX5HfWgEYlW.webp"
          height="200"
          width="200"
          alt="gif"
          className={`${
            showGif ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        />
      </div>
      <div className="absolute bottom-0 right-0 m-0 p-0">
        <Image
          src="/dog.webp"
          height="200"
          width="200"
          alt="gif"
          className={`${
            showGifDog ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        />
      </div>
    </section>
  );
}
