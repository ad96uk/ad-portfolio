'use client'
import Footer from "../components/Footer";
import Image from "next/image";
import SmoothScrolling from "../components/SmoothScrolling";

const Page = () => {
    
    SmoothScrolling();

    return (
        <>
    <main className="flex flex-col w-full items-center bg-black100 pt-[100px] relative">
        <div className="wrapper">    
        <div className="flex flex-row justify-between pb-[50px]">
            <div className="flex flex-col items-start w-[802px]">
            <a href="https://datacraft.store/"><h1 className="text-center text-[86px] leading-tight text-green200">DATACRAFT.STORE</h1></a>
            <p className="text-xl text-green200 font-[400] text-justify leading-tight"><span className="italic text-greenAccent">Project description:</span> The project involves transferring a design from Figma to WordPress without using child themes or page builders. This includes developing a custom theme to accurately reflect all design details and elements, ensuring the site is fully responsive for mobile devices. The process focuses on maintaining design integrity, optimizing performance, and ensuring cross-browser compatibility for an exceptional user experience.</p></div>
            <div className="pt-[15px]"><p className="text-xl text-green200">2024</p></div>
            <div className="flex flex-col gap-6  pt-[15px]">
                <span className="flex gap-6 justify-end"><button className="text-sm text-green200 border border-green200 p-3 rounded-full">PHP</button>
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">ACF</button></span>
                <span className="flex gap-6 justify-end">
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">Css</button>
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">JavaScript</button>
                </span>
                <span className="flex gap-6 justify-end">
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">Figma</button>
                </span>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <Image src='/datacraft/datacraft-1.png' width='1180' height='4096' alt="vdphoto_1" />
        </div>
        </div>
    </main>
    <Footer/>
     </>
    )
}

export default Page;