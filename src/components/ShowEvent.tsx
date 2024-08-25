import DeliveryIcon from "./icons/DeliveryIcon";

import React from "react";

interface EventItem {
  id: number;
  message: any;
  title: string;
  date: string;
  description: string;
}

interface ShowEventProps {
  title: string;
  eventData: EventItem[];
}

const ShowEvent: React.FC<ShowEventProps> = ({ title, eventData }) => {
  return (
    <div>
      <div className="rounded-lg bg-[#d0bbbb] p-4 shadow-2xl ">
        <div className="my-2">
          <span className="font-bold text-1.5xl ">{title}</span>
        </div>

        {eventData.map((event) => (
          <div key={event.id} className="flex items-center  pb-2 mb-2">
            <DeliveryIcon className="w-4 h-4 mr-2 " />
            <span className="pl-2 text-black">{event.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowEvent;
