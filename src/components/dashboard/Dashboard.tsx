// import "react-calendar/dist/Calendar.css";
// import "./calendar.css";

// import Calendar from "react-calendar";
// import Heading from "../Heading";
// import Modal from "./Modal.tsx"; // Import the Modal component
// import ScheduleEvent from "../ScheduleEvent";
// import ShowEvent from "../ShowEvent";
// import { useState } from "react";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// interface Event {
//   id: number;
//   message: string;
//   date: Date;
// }

// const pastEvents: Event[] = [
//   { id: 1, message: "Happy birthday", date: new Date(2023, 6, 1) },
//   { id: 2, message: "Get your phone charge", date: new Date(2023, 6, 2) },
//   { id: 3, message: "Have a good day!", date: new Date(2023, 6, 3) },
//   { id: 4, message: "Get well soon", date: new Date(2023, 6, 4) },
//   {
//     id: 5,
//     message: "Congratulations on your achievement",
//     date: new Date(2023, 6, 5),
//   },
// ];

// const upcomingEvents: Event[] = [
//   { id: 1, message: "Happy birthday", date: new Date(2023, 6, 6) },
//   { id: 2, message: "Get your phone charge", date: new Date(2023, 6, 7) },
//   { id: 3, message: "Have a good day!", date: new Date(2023, 6, 8) },
//   { id: 4, message: "Get well soon", date: new Date(2023, 6, 9) },
//   {
//     id: 5,
//     message: "Congratulations on your achievement",
//     date: new Date(2023, 6, 10),
//   },
// ];

// function Dashboard() {
//   const [value, onChange] = useState<Value>(new Date());
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//   const tileContent = ({ date, view }: { date: Date; view: string }) => {
//     if (view === "month") {
//       const event = pastEvents
//         .concat(upcomingEvents)
//         .find(
//           (event) =>
//             event.date.getFullYear() === date.getFullYear() &&
//             event.date.getMonth() === date.getMonth() &&
//             event.date.getDate() === date.getDate()
//         );
//       return event ? (
//         <div className="event-message">{event.message}</div>
//       ) : null;
//     }
//     return null;
//   };

//   const onClickDay = (date: Date) => {
//     const event = pastEvents
//       .concat(upcomingEvents)
//       .find(
//         (event) =>
//           event.date.getFullYear() === date.getFullYear() &&
//           event.date.getMonth() === date.getMonth() &&
//           event.date.getDate() === date.getDate()
//       );
//     if (event) {
//       setSelectedEvent(event);
//     }
//   };

//   return (
//     <div className=" text-black h-screen p-4">
//       <h1
//         style={{
//           fontSize: "24px",
//           fontWeight: "bold",
//           marginBottom: "10px",
//           color: "#3c4043",
//           textAlign: "center",
//         }}
//       >
//         Calendar
//       </h1>
//       <div className="">
//         <div className=" ">
//           <div className="">
//             {/* <ScheduleEvent />
//             <ScheduleEvent /> */}
//           </div>
//           <Calendar
//             onChange={onChange}
//             value={value}
//             className="bg-black rounded-lg  "
//             tileContent={tileContent}
//             onClickDay={onClickDay}
//           />
//         </div>

//         <div className="lg:w-2/5 space-y-4 mt-4 lg:mt-0">
//           <ShowEvent title="Past Event" eventData={pastEvents} />
//           <ShowEvent title="Upcoming Event" eventData={upcomingEvents} />
//         </div>
//       </div>

//       {selectedEvent && (
//         <Modal
//           message={selectedEvent.message}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Event {
  id: number;
  message: string;
  date: Date;
}

const pastEvents: Event[] = [
  { id: 1, message: "Happy birthday", date: new Date(2023, 6, 1) },
  { id: 2, message: "Get your phone charge", date: new Date(2023, 6, 2) },
  { id: 3, message: "Have a good day!", date: new Date(2023, 6, 3) },
  { id: 4, message: "Get well soon", date: new Date(2023, 6, 4) },
  {
    id: 5,
    message: "Congratulations on your achievement",
    date: new Date(2023, 6, 5),
  },
];

const upcomingEvents: Event[] = [
  { id: 1, message: "Happy birthday", date: new Date(2023, 6, 6) },
  { id: 2, message: "Get your phone charge", date: new Date(2023, 6, 7) },
  { id: 3, message: "Have a good day!", date: new Date(2023, 6, 8) },
  { id: 4, message: "Get well soon", date: new Date(2023, 6, 9) },
  {
    id: 5,
    message: "Congratulations on your achievement",
    date: new Date(2023, 6, 10),
  },
];

function Dashboard() {
  const [value, onChange] = useState<Value>(new Date());

  const navigate = useNavigate();

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = pastEvents
        .concat(upcomingEvents)
        .find(
          (event) =>
            event.date.getFullYear() === date.getFullYear() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getDate() === date.getDate()
        );
      return event ? (
        <div className="event-message">{event.message}</div>
      ) : null;
    }
    return null;
  };

  const onClickDay = (date: Date) => {
    const event = pastEvents
      .concat(upcomingEvents)
      .find(
        (event) =>
          event.date.getFullYear() === date.getFullYear() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getDate() === date.getDate()
      );
    navigate("/events", { state: { selectedDate: date } });
    // if (event) {
    //   setSelectedEvent(event);
    // }
  };

  return (
    <div className="text-black h-screen p-4 flex flex-col items-center bg-orange-50">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Calendar</h1>
      <div className="w-full max-w-6xl">
        <Link to={"/event"}>
          <Calendar
            onChange={onChange}
            value={value}
            tileContent={tileContent}
            onClickDay={onClickDay}
            className="calendar-custom bg-white rounded-lg shadow-lg "
          />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

// import "react-calendar/dist/Calendar.css";
// import "./calendar.css";
// import Calendar from "react-calendar";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EventForm from "./Event";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// interface Event {
//   id: number;
//   message: string;
//   date: Date;
// }

// const pastEvents: Event[] = [
//   { id: 1, message: "Happy birthday", date: new Date(2023, 6, 1) },
//   // other events
// ];

// const upcomingEvents: Event[] = [
//   { id: 1, message: "Happy birthday", date: new Date(2023, 6, 6) },
//   // other events
// ];

// function Dashboard() {
//   const [value, onChange] = useState<Value>(new Date());
//   const [events, setEvents] = useState([...pastEvents, ...upcomingEvents]);
//   const navigate = useNavigate();

//   const tileContent = ({ date, view }: { date: Date; view: string }) => {
//     if (view === "month") {
//       const event = events.find(
//         (event) =>
//           event.date.getFullYear() === date.getFullYear() &&
//           event.date.getMonth() === date.getMonth() &&
//           event.date.getDate() === date.getDate()
//       );
//       return event ? (
//         <div className="event-message">{event.message}</div>
//       ) : null;
//     }
//     return null;
//   };

//   const onClickDay = (date: Date) => {
//     navigate("/create-event", {
//       state: { date: date.toISOString().split("T")[0] },
//     });
//   };

//   const handleSaveEvent = (newEvent: {
//     title: string;
//     date: string;
//     description: string;
//   }) => {
//     const id = events.length + 1;
//     const eventDate = new Date(newEvent.date);
//     setEvents([...events, { id, message: newEvent.title, date: eventDate }]);
//   };

//   return (
//     <div className="text-black h-screen p-4 flex flex-col items-center bg-orange-50">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Calendar</h1>
//       <div className="w-full max-w-6xl">
//         <Calendar
//           onChange={onChange}
//           value={value}
//           tileContent={tileContent}
//           onClickDay={onClickDay}
//           className="calendar-custom bg-white rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route
//           path="/create-event"
//           element={<EventForm onSave={handleSaveEvent} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
