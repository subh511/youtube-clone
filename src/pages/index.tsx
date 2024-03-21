//import Image from "next/image";
//import VideoCard from "@/components/VideoCard";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar/>
      <VideoGrid/>
    </div>
  );
}
