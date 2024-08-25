// import { useState } from "react";

// type Event = {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
// };

// const dummyEvents: Event[] = [
//   {
//     id: 1,
//     title: "Event 1",
//     description: "Description for Event 1",
//     date: "2024-07-01",
//   },
//   {
//     id: 2,
//     title: "Event 2",
//     description: "Description for Event 2",
//     date: "2024-07-02",
//   },
//   {
//     id: 3,
//     title: "Event 3",
//     description: "Description for Event 3",
//     date: "2024-07-03",
//   },
//   {
//     id: 4,
//     title: "Event 4",
//     description: "Description for Event 4",
//     date: "2024-07-04",
//   },
//   {
//     id: 5,
//     title: "Event 5",
//     description: "Description for Event 5",
//     date: "2024-07-05",
//   },
//   // Add more events as needed
// ];

// const ScheduleEvent = () => {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//   const handleEventClick = () => {
//     setSelectedEvent(dummyEvents[0]);
//   };

//   return (
//     <div className="w-[50%]">
//       <div
//         onClick={handleEventClick}
//         className="flex justify-center text-2xl items-center p-4 bg-gradient-to-r from-green-200 to-pink-300 text-gray-700 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300 h-[70px]"
//       >
//         <p className="text-center font-bold">
//           {dummyEvents.length} Schedule Events
//         </p>
//       </div>

//       {selectedEvent && (
//         <div className="overlay">
//           <div className="overlay-content w-[40%] max-h-[60%] h-auto">
//             <h2 className="text-l font-bold mb-2">{selectedEvent.title}</h2>
//             <p>{selectedEvent.description}</p>
//             <p className="mt-2 text-sm text-gray-400">{selectedEvent.date}</p>
//             <button
//               onClick={() => setSelectedEvent(null)}
//               className=" bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 h-16 w-16"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScheduleEvent;
import { useState } from "react";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const dummyEvents: Event[] = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    date: "2024-07-02",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for Event 3",
    date: "2024-07-03",
  },
  {
    id: 4,
    title: "Event 4",
    description: "Description for Event 4",
    date: "2024-07-04",
  },
];

interface ScheduleEventProps {
  onClickDay: (date: Date) => void;
}

const ScheduleEvent: React.FC<ScheduleEventProps> = ({ onClickDay }) => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="w-full">
      <div
        onClick={() => handleEventClick(dummyEvents[0])}
        className="flex justify-center text-2xl items-center p-4  text-gray-700 rounded-lg shadow-lg cursor-pointer hover:text-white transition-colors duration-300 h-[70px]"
      >
        <p className="text-center font-bold">
          {dummyEvents.length} Schedule Events
        </p>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[40%] max-h-[60%] h-auto">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <p className="mt-2 text-sm text-gray-400">{selectedEvent.date}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleEvent;
