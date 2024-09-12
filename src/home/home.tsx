// import { useState } from "react";
// import img1 from "../assets/Image.png";
// import About from "./about";
// import ScheduleEvent from "../components/ScheduleEvent";
// import ShowEventProps from "../components/ShowEvent";

// interface Home {
//   img: string;
//   name: string;
// }
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
// const [value, onChange] = useState<Value>(new Date());

// const tileContent = ({ date, view }: { date: Date; view: string }) => {
//   if (view === "month") {
//     const event = pastEvents
//       .concat(upcomingEvents)
//       .find(
//         (event) =>
//           event.date.getFullYear() === date.getFullYear() &&
//           event.date.getMonth() === date.getMonth() &&
//           event.date.getDate() === date.getDate()
//       );
//     return event ? <div className="event-message">{event.message}</div> : null;
//   }
//   return null;
// };

// const onClickDay = (date: Date) => {
//   const event = pastEvents
//     .concat(upcomingEvents)
//     .find(
//       (event) =>
//         event.date.getFullYear() === date.getFullYear() &&
//         event.date.getMonth() === date.getMonth() &&
//         event.date.getDate() === date.getDate()
//     );
//   if (event) {
//     setSelectedEvent(event);
//   }
// };
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
// const Home: React.FC = () => {
//   return (
//     <div>
//       <div
//         className="w-[100%] min-width:640px h-screen  bg-orange-50 relative "
//         // style={{
//         //   backgroundImage: `url("https://img.freepik.com/free-vector/blank-blue-leafy-poster_53876-99945.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid")`,
//         //   backgroundSize: "cover",
//         //   backgroundPosition: "centre",
//         // }}
//       >
//         <div className="">
//           <ScheduleEvent />
//           // <ScheduleEvent />
//         </div>
//         {selectedEvent && (
//           <Modal
//             message={selectedEvent.message}
//             onClose={() => setSelectedEvent(null)}
//           />
//         )}
//       </div>
//        <div className="lg:w-2/5 space-y-4 mt-4 lg:mt-0">
// //           <ShowEvent title="Past Event" eventData={pastEvents} />
// //           <ShowEvent title="Upcoming Event" eventData={upcomingEvents} />
// //         </div>
//       <div className=" text-center w-[83%] rounded-2xl  absolute -bottom-20">
//         <About />
//       </div>
//     </div>
//   );
// };
// export default Home;

// import { useState } from "react";

// import ScheduleEvent from "../components/ScheduleEvent";
// import ShowEvent from "../components/ShowEvent";
// import Modal from "../components/dashboard/Modal";
// import EventForm from "../components/dashboard/EventForm";
// // import { pastEvents, upcomingEvents } from "../components/dashboard/EventData";

// interface Event {
//   id: number;
//   message: string;
//   date: Date;
// }
// interface EventItem {
//   id: number;
//   title: string;
//   message: string;
//   date: string;
//   // description: string;
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

// const Home: React.FC = () => {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//   const [showPastEvents, setShowPastEvents] = useState(false);
//   const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

//   const togglePastEvents = () => setShowPastEvents(!showPastEvents);
//   const toggleUpcomingEvents = () => setShowUpcomingEvents(!showUpcomingEvents);
//   const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);

//   const handleSaveEvent = (newEvent: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     // description: string;I
//     message: string;
//   }) => {
//     // Create a new event item
//     const eventToAdd: EventItem = {
//       id: Date.now(),
//       title: newEvent.title,
//       message: newEvent.message,
//       date: `${newEvent.date} ${newEvent.time}`,
//       // description: newEvent.description,
//     };

//     setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);
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
//     <div className="w-full min-width:640px h-screen bg-orange-50 relative">
//       <div>
//         <ScheduleEvent onClickDay={onClickDay} />
//       </div>

//       {selectedEvent && (
//         <Modal
//           message={selectedEvent.message}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}

//       <div className="lg:w-2/5 space-y-4 mt-4 lg:mt-0 ">
//         <button>
//           <ShowEvent title="Past Events" eventData={pastEvents} />
//         </button>
//         <button>
//           {" "}
//           <ShowEvent title="Upcoming Events" eventData={upcomingEvents} />
//         </button>
//         {/* <EventForm onSave={handleSaveEvent} />
//         <ShowEvent title="Upcoming Events" eventData={upcomingEvents} /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import ScheduleEvent from "../components/ScheduleEvent";
// import ShowEvent from "../components/ShowEvent";
// import Modal from "../components/dashboard/Modal";
// import EventForm from "../components/dashboard/EventForm";

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
//   { id: 5, message: "Congratulations", date: new Date(2023, 6, 5) },
// ];

// const Home: React.FC = () => {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//   const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);
//   const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

//   const toggleUpcomingEvents = () => setShowUpcomingEvents(!showUpcomingEvents);

//   const handleSaveEvent = (newEvent: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//   }) => {
//     const eventToAdd: Event = {
//       id: Date.now(),
//       message: newEvent.message,
//       date: new Date(`${newEvent.date}T${newEvent.time}`),
//     };

//     setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);
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
//     <div className="w-full min-width:640px h-screen bg-orange-50 relative">
//       <div>
//         <ScheduleEvent onClickDay={onClickDay} />
//       </div>

//       {selectedEvent && (
//         <Modal
//           message={selectedEvent.message}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}

//       <div className="lg:w-2/5 space-y-4 mt-4 lg:mt-0">
//         <button onClick={toggleUpcomingEvents}>Show Upcoming Events</button>

//         {showUpcomingEvents && (
//           <ShowEvent title="Upcoming Events" eventData={upcomingEvents} />
//         )}

//         <EventForm onSave={handleSaveEvent} />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useContext } from "react";
// import { AppContext } from "../App";

// const Home: React.FC = () => {
//   const appContext = useContext(AppContext);

//   // Handle the case where context is not available
//   if (!appContext) {
//     return <div>Error: App context is undefined.</div>;
//   }

//   const { upcomingEvents, toggleVisibility, showUpcomingEvents } = appContext;

//   return (
//     <div className="bg-gray-100 h-screen p-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Home Page</h1>
//       <div className="flex justify-center mb-8">
//         <button
//           onClick={toggleVisibility}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//         >
//           {showUpcomingEvents ? "Hide Upcoming Events" : "Show Upcoming Events"}
//         </button>
//       </div>

//       {showUpcomingEvents && (
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
//           {upcomingEvents.length === 0 ? (
//             <p className="text-gray-600">No upcoming events.</p>
//           ) : (
//             <ul>
//               {upcomingEvents.map((event) => (
//                 <li key={event.id} className="mb-4">
//                   <strong>{event.title}</strong> -{" "}
//                   {new Date(event.date).toLocaleDateString()}
//                   <p>{event.message}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// import React, { useContext, useState, useEffect } from "react";
// import { AppContext } from "../App";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import About from "./about";
// import IMG10 from "../assets/IMG10.png";
// interface Member {
//   name: string;
//   email: string;
//   profileImageUrl?: string;
// }
// interface FormData {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   groupName: string;
//   profileImageUrl?: string;
//   groupProfileImageUrl?: string;
//   members: Member[];
// }
// const Home: React.FC = () => {
//   const appContext = useContext(AppContext);
//   const [contacts, setContacts] = useState<FormData[]>([]);
//   useEffect(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);
//   const deleteContact = (index: number) => {
//     const updatedContacts = contacts.filter((_, i) => i !== index);
//     setContacts(updatedContacts);
//     localStorage.setItem("contacts", JSON.stringify(updatedContacts));
//   };

//   if (!appContext) {
//     return <div>Error: App context is undefined.</div>;
//   }

//   const { upcomingEvents, setUpcomingEvents } = appContext;

//   const deleteEvent = (id: number) => {
//     const updatedEvents = upcomingEvents.filter((event) => event.id !== id);

//     setUpcomingEvents(updatedEvents);

//     localStorage.setItem("upcomingEvents", JSON.stringify(updatedEvents));
//   };

//   return (
//     <div className=" h-screen w-full ">
//       <div className="p-36">
//         <div className="bg-gray-100 w-[70%] h-full  rounded-3xl shadow-2xl border border-orange-200">
//           <h1 className="text-3xl font-semibold text-center mb-8 text-black underline italic mt-4">
//             Events
//           </h1>

//           <div className="p-8 ">
//             <h2 className="text-3xl font-bold mb-4 text-black  font-cursive">
//               Upcoming Events :
//             </h2>
//             <div className="w-[70%] bg-white p-8 rounded-lg shadow-2xl">
//               {upcomingEvents.length === 0 ? (
//                 <p className="text-gray-600">No upcoming events.</p>
//               ) : (
//                 <ul>
//                   {upcomingEvents.map((event) => (
//                     <li key={event.id} className="mb-4 text-black">
//                       <div className="flex gap-2">
//                         {new Date(event.date).toLocaleDateString("en-US", {
//                           // year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })}
//                         ,<strong>{event.title}</strong>{" "}
//                       </div>

//                       <div className="flex justify-between">
//                         <p>{event.message}</p>
//                         <button
//                           className="text-red-500 italic"
//                           onClick={() => deleteEvent(event.id)}
//                         >
//                           <RiDeleteBin6Fill color="red" size={26} />
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//           <div className="p-8 ">
//             <h1 className="text-3xl  mb-4 text-black font-bold font-cursive">
//               Contact Info :
//             </h1>
//             <div className="w-[70%] bg-white p-8 rounded-lg shadow-2xl">
//               {contacts.length === 0 ? (
//                 <p className="text-gray-600">No contacts available.</p>
//               ) : (
//                 <ul>
//                   {contacts.map((contact, index) => (
//                     <li
//                       key={index}
//                       className="mb-4 text-black flex justify-between"
//                     >
//                       <div className="flex gap-4 items-center">
//                         {contact.profileImageUrl && (
//                           <img
//                             src={contact.profileImageUrl}
//                             alt={contact.name}
//                             className="w-12 h-12 rounded-full"
//                           />
//                         )}
//                         <div>
//                           <p className="font-bold italic text-xl ">
//                             {contact.name}
//                           </p>
//                           <p className="mt-2 ">{contact.email}</p>
//                           <p>{contact.phoneNumber}</p>
//                         </div>
//                       </div>
//                       <button
//                         className="text-red-500 italic"
//                         onClick={() => deleteContact(index)}
//                       >
//                         <RiDeleteBin6Fill color="red" size={26} />
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* <div className="w-full">
//         <About />
//       </div> */}
//       </div>
//       <div />
//     </div>
//   );
// };

// export default Home;

import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { RiDeleteBin6Fill } from "react-icons/ri";
import About from "./about";
import IMG10 from "../assets/IMG10.png";

interface Member {
  name: string;
  email: string;
  profileImageUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  groupName: string;
  profileImageUrl?: string;
  groupProfileImageUrl?: string;
  members: Member[];
}

const Home: React.FC = () => {
  const appContext = useContext(AppContext);
  const [contacts, setContacts] = useState<FormData[]>([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  if (!appContext) {
    return <div>Error: App context is undefined.</div>;
  }

  const { upcomingEvents, setUpcomingEvents } = appContext;

  const deleteEvent = (id: number) => {
    const updatedEvents = upcomingEvents.filter((event) => event.id !== id);
    setUpcomingEvents(updatedEvents);
    localStorage.setItem("upcomingEvents", JSON.stringify(updatedEvents));
  };

  return (
    <div className="h-screen w-full flex  bg-gray-100">
      <div className="max-w-4xl w-[50%] mx-4 mt-8  ml-64">
        <h1 className="text-3xl font-semibold text-center mb-8 text-black underline italic ">
          Events
        </h1>

        <div className="mb-8 ">
          <h2 className="text-3xl font-bold mb-4 text-black font-cursive ">
            Upcoming Events:
          </h2>
          <div className="bg-white rounded-lg shadow-2xl flex justify-between">
            {upcomingEvents.length === 0 ? (
              <p className="p-4 text-gray-600">No upcoming events.</p>
            ) : (
              <ul>
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="mb-4 text-black">
                    <div className="flex gap-2">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      ,
                      <strong className="font-bold italic text-xl">
                        {event.title}
                      </strong>{" "}
                    </div>

                    <div className="flex gap-10">
                      <p>{event.message}</p>
                      <button
                        className="text-red-500 italic"
                        onClick={() => deleteEvent(event.id)}
                      >
                        <RiDeleteBin6Fill color="red" size={26} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl mb-2 text-black font-bold font-cursive ">
            Contact Info:
          </h1>
          <div className="bg-white rounded-lg shadow-2xl text-black">
            {contacts.length === 0 ? (
              <p className="p-4 text-gray-600">No contacts available.</p>
            ) : (
              <ul>
                {contacts.map((contact, index) => (
                  <li key={index} className="p-4 border-b flex justify-between">
                    <div className="flex gap-4 items-center">
                      {contact.profileImageUrl && (
                        <img
                          src={contact.profileImageUrl}
                          alt={contact.name}
                          className="w-12 h-12 rounded-full"
                        />
                      )}
                      <div>
                        <p className="font-bold italic text-xl">
                          {contact.name}
                        </p>
                        <p className="mt-2">{contact.email}</p>
                        <p>{contact.phoneNumber}</p>
                      </div>
                    </div>
                    <button
                      className="text-red-500"
                      onClick={() => deleteContact(index)}
                    >
                      <RiDeleteBin6Fill color="red" size={26} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
