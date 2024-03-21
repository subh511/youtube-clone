import React from "react";

export default function VideoCard() {
  return (
    <div>
      <img src="/photo.jpg" />
      <div className="grid grid-cols-12 pl-4 pt-2">
        <div className="col-span-1">
          <img className="rounded-full w-10 h-10 " src="/photo.jpg" />
        </div>
        <div className="col-span-11 pl-2">
          <div>
            Sita Kalyanam Lyric Video - Solo| Dulquer Salmaan, Neha Sharma,
            Bejoy Nambiar| Trend Music
          </div>
          <div className="col-span-11  text-gray-500 text-base">Samrat Doe</div>
          <div className="col-span-11  text-gray-500 text-base">
            45Mn views | 12 days ago
          </div>
        </div>
      </div>
    </div>
  );
}
