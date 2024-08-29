import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Cursor from "./components/utils/Cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anton D - Web Developer",
  description: "...",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Cursor />
        <Menu />
        <div className="transition-overlay fixed top-0 left-0 w-full h-screen z-[300] bg-green200" style={{ visibility: "hidden" }}></div>
        {children}
        </body>
    </html>
  );
}
