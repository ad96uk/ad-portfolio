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
            <div className="flex flex-col items-start w-[710px]">
            <a href="https://vdphoto.co.uk/"><h1 className="text-center text-[86px] leading-tight text-green200">VDPHOTO.CO.UK</h1></a>
            <p className="text-xl text-green200 font-[400] text-justify leading-tight"><span className="italic text-greenAccent">Project description:</span> The project involves transferring a photographer's portfolio website design from Figma to WordPress. This includes converting the visual and interactive elements designed in Figma into a fully functional WordPress site. The process will ensure that the website maintains its original design integrity, responsiveness, and user experience, while leveraging the powerful content management capabilities of WordPress.</p></div>
            <div className="pt-[15px]"><p className="text-xl text-green200">2024</p></div>
            <div className="flex flex-col gap-6 pt-[15px]">
                <span className="flex gap-6 justify-end"><button className="text-sm text-green200 border border-green200 p-3 rounded-full">JavaScript</button>
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">Figma</button></span>
                <span className="flex gap-6 justify-end">
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">Css</button>
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">Elementor</button>
                </span>
                <span className="flex gap-6 justify-end">
                <button className="text-sm text-green200 border border-green200 p-3 rounded-full">PHP</button>
                </span>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <Image src='/vphoto/vdphoto_0.png' width='1180' height='1012' alt="vdphoto_1" />
            {/* <Image src='/vphoto/vdphoto_2.png' width='1180' height='668' alt="vdphoto_2" />
            <Image src='/vphoto/vdphoto_3.png' width='1180' height='629' alt="vdphoto_3" /> */}
        </div>
        </div>
    </main>
    <Footer/>
     </>
    )
}

export default Page;