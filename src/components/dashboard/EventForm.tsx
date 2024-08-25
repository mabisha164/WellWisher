// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { CiCalendarDate } from "react-icons/ci";
// import { FaList } from "react-icons/fa";

// interface EventFormProps {
//   onSave: (event: {
//     title: string;
//     description: string;
//     selectedDate: string;

//     // contact: number;
//   }) => void;
// }
// const EventForm: React.FC<EventFormProps> = ({ onSave }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   //   const [contact, setContact] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { selectedDate } = location.state || {};
//   // const date = location.state?.date || "";
//   const handlesave = () => {
//     onSave({ title, description, selectedDate });
//     navigate("/");
//   };

//   return (
//     <div className="text-black w-full h-screen  p-28">
//       <div className="w-[60%] rounded-3xl shadow-2xl border-2 border-orange-200 ">
//         <form className="">
//           <h1 className="p-4 font-bold italic text-2xl underline text-center ">
//             Upcomming Events
//           </h1>
//           <div className="ml-28">
//             <div>
//               <label className="text-xl">Event Title :</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="border border-gray-600 rounded-xl shadow-xl  ml-2"
//               />
//             </div>
//             <div className=" text-xl flex gap-2 mt-4">
//               <div>
//                 <CiCalendarDate size={28} />{" "}
//               </div>{" "}
//               <h1>Selected Date: {selectedDate?.toLocaleDateString()}</h1>
//             </div>
//             <div className="flex gap-2 mt-6">
//               <div>
//                 <FaList size={20} className="mt-1" />
//               </div>
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//                 htmlFor="description"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-[50%] p-2 border border-gray-600 rounded-lg ml-2"
//                 rows={4}
//                 placeholder="Enter a detailed description of the event"
//                 required
//               />
//             </div>
//             <div className="flex justify-start p-4">
//               <button
//                 onClick={handlesave}
//                 className="text-xl bg-blue-700 text-white h-10 w-20 rounded-lg shadow-2xl"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => navigate("/")}
//                 className="text-xl bg-red-600 text-white h-10 w-20 rounded-lg shadow-2xl"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default EventForm;

// import React, { useState } from "react";
// import { CiCalendarDate } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

// interface EventFormProps {
//   onSave: (event: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//     someIntervalId: any;
//   }) => void;
// }

// const EventForm: React.FC<EventFormProps> = ({ onSave }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("00:00");
//   const [allDay, setAllDay] = useState(false);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({ title, date, time, allDay, message, someIntervalId });
//     setTitle("");
//     setDate("");
//     setTime("00:00");
//     setAllDay(false);
//     setMessage("");
//     someIntervalId("");
//     navigate("/home");
//   };

//   return (
//     <div className="bg-orange-50 h-screen p-28  ">
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 p-4 rounded-lg shadow-2xl w-[80%] border border-orange-300 bg-white border-separate border-s-8"
//       >
//         <div>
//           <h1 className="p-4 font-bold italic text-3xl underline text-center text-black ">
//             Upcomming Events
//           </h1>
//           <div className=" flex gap-6 p-3 ml-16">
//             <label
//               className="block text-gray-700 font-bold mb-2 text-l "
//               htmlFor="title"
//             >
//               Title :
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className=" p-1 border border-gray-300 rounded-lg text-black"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex gap-8 ml-10 text-l">
//           <div className="flex gap-2 items-center">
//             <CiCalendarDate size={28} />
//             <div className="flex">
//               <label className=" text-gray-700 font-bold flex " htmlFor="date">
//                 Date:
//               </label>
//               <input
//                 id="date"
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
//                 required
//               />
//             </div>
//           </div>

//           {!allDay && (
//             <div className="flex">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//                 htmlFor="time"
//               >
//                 Time
//               </label>
//               <input
//                 id="time"
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
//               />
//             </div>
//           )}

//           <div className="">
//             <input
//               id="allDay"
//               type="checkbox"
//               checked={allDay}
//               onChange={(e) => setAllDay(e.target.checked)}
//               className="mr-2"
//             />
//             <label htmlFor="allDay" className="text-gray-700 font-bold ml-2 ">
//               All Day
//             </label>
//           </div>
//         </div>
//         <div className="flex gap-4 ml-16 mt-4">
//           <label
//             className="block text-gray-700 font-bold mb-2 ml-3"
//             htmlFor="messages"
//           >
//             Description :
//           </label>
//           <textarea
//             id="description"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-[60%] p-1 border border-gray-300 rounded-lg text-black"
//             rows={4}
//             placeholder="Enter a detailed description of the event"
//           />
//         </div>

//         <div className="flex gap-2 ml-14">
//           <button
//             type="submit"
//             className=" w-[20%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-xl"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setTitle("");
//               setDate("");
//               setTime("00:00");
//               setAllDay(false);
//               setMessage("");
//               clearInterval(someIntervalId); // Optionally clear an interval if applicable

//               navigate("/");
//             }}
//             className="text-xl bg-red-600 text-white h-10 rounded-lg shadow-2xl w-[20%] hover:bg-red-700"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EventForm;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../App";

// const EventForm: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("00:00");
//   const [allDay, setAllDay] = useState(false);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const appContext = useContext(AppContext);
//   if (!appContext) {
//     return null; // Handle the case where context is not available
//   }

//   const { handleSaveEvent } = appContext;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleSaveEvent({
//       title,
//       date,
//       time,
//       allDay,
//       message,
//       someIntervalId: null,
//     });
//     navigate("/home");
//     setTitle("");
//     setDate("");
//     setTime("00:00");
//     setAllDay(false);
//     setMessage("");
//     someIntervalId("");
//   };

//   return (
//     <div className="bg-orange-50 h-screen p-28">
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 p-4 rounded-lg shadow-2xl w-[80%] border border-orange-300 bg-white border-separate border-s-8"
//       >
//         <h1 className="p-4 font-bold italic text-3xl underline text-center text-black">
//           Upcoming Events
//         </h1>
//         <div className="flex gap-6 p-3 ml-16">
//           <label
//             className="block text-gray-700 font-bold mb-2 text-l"
//             htmlFor="title"
//           >
//             Title:
//           </label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="p-1 border border-gray-300 rounded-lg text-black"
//             required
//           />
//         </div>
//         <div className="flex gap-8 ml-10 text-l">
//           <div className="flex gap-2 items-center">
//             <label className="text-gray-700 font-bold flex" htmlFor="date">
//               Date:
//             </label>
//             <input
//               id="date"
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
//               required
//             />
//           </div>
//           {!allDay && (
//             <div className="flex">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//                 htmlFor="time"
//               >
//                 Time:
//               </label>
//               <input
//                 id="time"
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
//               />
//             </div>
//           )}
//           <div className="">
//             <input
//               id="allDay"
//               type="checkbox"
//               checked={allDay}
//               onChange={(e) => setAllDay(e.target.checked)}
//               className="mr-2"
//             />
//             <label htmlFor="allDay" className="text-gray-700 font-bold ml-2">
//               All Day
//             </label>
//           </div>
//         </div>
//         <div className="flex gap-4 ml-16 mt-4">
//           <label
//             className="block text-gray-700 font-bold mb-2 ml-3"
//             htmlFor="messages"
//           >
//             Description:
//           </label>
//           <textarea
//             id="description"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-[60%] p-1 border border-gray-300 rounded-lg text-black"
//             rows={4}
//             placeholder="Enter a detailed description of the event"
//           />
//         </div>
//         <div className="flex gap-2 ml-14">
//           <button
//             type="submit"
//             className="w-[20%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-xl"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setTitle("");
//               setDate("");
//               setTime("00:00");
//               setAllDay(false);
//               setMessage("");
//               clearInterval(someIntervalId);

//               navigate("/home");
//             }}
//             className="text-xl bg-red-600 text-white h-10 rounded-lg shadow-2xl w-[20%] hover:bg-red-700"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EventForm;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const EventForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("00:00");
  const [allDay, setAllDay] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const appContext = useContext(AppContext);
  if (!appContext) {
    return null;
  }

  const { handleSaveEvent } = appContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      time,
      allDay,
      message,
      someIntervalId: null,
    };

    handleSaveEvent(newEvent);
    navigate("/");
    setTitle("");
    setDate("");
    setTime("00:00");
    setAllDay(false);
    setMessage("");
  };

  return (
    <div className="bg-orange-50 h-screen p-28">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 rounded-lg shadow-2xl w-[80%] border border-orange-300 bg-white border-separate border-s-8"
      >
        <h1 className="p-4 font-bold italic text-3xl underline text-center text-black">
          Upcoming Events
        </h1>
        <div className="flex gap-6 p-3 ml-16">
          <label
            className="block text-gray-700 font-bold mb-2 text-l"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-1 border border-gray-300 rounded-lg text-black"
            required
          />
        </div>
        <div className="flex gap-8 ml-16 text-l p-3">
          <div className="flex gap-2 items-center">
            <label className="text-gray-700 font-bold flex" htmlFor="date">
              Date:
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
              required
            />
          </div>
          {!allDay && (
            <div className="flex">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="time"
              >
                Time:
              </label>
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-lg ml-4 text-black"
              />
            </div>
          )}
          <div className="">
            <input
              id="allDay"
              type="checkbox"
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="allDay" className="text-gray-700 font-bold ml-2">
              All Day
            </label>
          </div>
        </div>
        <div className="flex gap-4 ml-16 p-3">
          <label
            className="block text-gray-700 font-bold mb-2 "
            htmlFor="message"
          >
            Description:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-[60%] p-1 border border-gray-300 rounded-lg text-black"
            rows={4}
            placeholder="Enter a detailed description of the event"
          />
        </div>
        <div className="flex gap-2 ml-14">
          <button
            type="submit"
            className="w-[20%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 hover:text-black transition-colors duration-300 text-xl"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDate("");
              setTime("00:00");
              setAllDay(false);
              setMessage("");
              clearInterval(someIntervalId);

              navigate("/");
            }}
            className="text-xl bg-red-600 text-white h-10 rounded-lg shadow-2xl w-[20%] hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
