import React, {useState} from "react";
import Image from "next/image";

export default function AboutMe() {
const [showGif, setShowGif] = useState(false);
const [showGifDog, setShowGifDog] = useState(false);

  return (
    <section className="flex flex-col w-full py-[150px] items-center bg-white relative">
      <div className="w-full max-w-[1180px]">
        {" "}
        <h2 className="text-7xl leading-tight pb-[40px] text-start">
          <span className="text-greenAccent italic">{"{About}"}</span> me
        </h2>
        <div className="flex flex-col gap-2 pb-10"><span className="inline-flex text-[40px] items-center gap-2"><p>I’m passionate about <span
        onMouseEnter={() => setShowGif(true)}
        onMouseLeave={() => setShowGif(false)}
        className="font-bold pulsating">developing</span></p><Image src="/icons8-developer.gif" width="40" height="40" alt="gif" /><p>digital solutions that</p> 
        </span>
        <span className="inline-flex text-[40px] items-center gap-2"><p>prioritise user</p><Image src="/icons8-user.gif" width="40" height="40" alt="gif" /> <p>experience, ensuring every design</p><Image src="/icons8-figma.gif" width="40" height="40" alt="gif" />
        </span>
        <p className="text-[40px]">is both functional and accessible.</p></div>
        <div className="flex flex-col gap-2">
        <span className="inline-flex text-[40px] items-center gap-2"><p>My goal is to build apps and websites</p><Image src="/icons8-wordpress (1).gif" width="40" height="40" alt="gif" /><p>that offer</p></span>
        <p className="text-[40px]">users a genuinely <span
        onMouseEnter={() => setShowGifDog(true)}
        onMouseLeave={() => setShowGifDog(false)}
        className="font-[600] pulsating-2">engaging</span> and intuitive experience.</p>
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
