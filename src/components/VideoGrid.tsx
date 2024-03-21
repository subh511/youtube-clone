import React from "react";
import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title:
      "Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,Bejoy Nambiar| Trend Music",
    view: "45Mn views",
    timestamp: "12 days ago",
    image: "photo.jpg",
    author: "Samrat Doe",
  },
  {
    title:
      "Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,Bejoy Nambiar| Trend Music",
    view: "45Mn views",
    timestamp: "12 days ago",
    image: "photo.jpg",
    author: "Samrat Doe",
  },
  {
    title:
      "Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,Bejoy Nambiar| Trend Music",
    view: "45Mn views",
    timestamp: "12 days ago",
    image: "photo.jpg",
    author: "Samrat Doe",
  },
  {
    title:
      "Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,Bejoy Nambiar| Trend Music",
    view: "45Mn views",
    timestamp: "12 days ago",
    image: "photo.jpg",
    author: "Samrat Doe",
  },
];

export default function VideoGrid() {
  return (
  <div className="grid grid-4">
  {
    VIDEOS.map((video,idx)=><div>
    <VideoCard
        title={video.title}
        view={video.view}
        timestamp={video.timestamp}
        image={video.image}
        author={video.author}
      />
    </div>)
  }
  </div>
  );
}
