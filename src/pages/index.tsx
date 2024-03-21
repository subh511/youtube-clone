//import Image from "next/image";
import VideoCard from "@/components/VideoCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={
          "Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,Bejoy Nambiar| Trend Music"
        }
        view={"45Mn views"}
        timestamp={"12 days ago"}
        image={"photo.jpg"}
      />
    </div>
  );
}
