import React from "react";

export default function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img src={props.image} alt="none"></img>
      <div className="grid grid-cols-12 pl-4 pt-2">
        <div className="col-span-1">
          <img className="rounded-full w-10 h-10 " src={props.image} />
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.views}| {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
