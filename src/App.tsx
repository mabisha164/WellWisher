// import { useEffect, useState } from "react";

// import Navbar from "./components/sideNavbar/Navbar";
// import { Outlet } from "react-router-dom";
// import { RootState } from "./store/store.tsx";
// import Welcome from "./components/welcome/Welcome.tsx";
// import { useSelector } from "react-redux";
// import Heading from "./components/Heading.tsx";
// import SignIn from "./components/auth/SignIn.tsx";
// import SignUp from "./components/auth/SignUp.tsx";

// function App() {
//   const [collapse, setCollapse] = useState(false);
//   const [loading, setLoading] = useState(true);
//  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

//  const handleSaveEvent = (newEvent: {
//    title: string;
//    date: string;
//    time: string;
//    allDay: boolean;
//    message: string;
//    someIntervalId: any;
//  }) => {
//    const eventToAdd: Event = {
//      id: Date.now(),
//      title: newEvent.title,
//      message: newEvent.message,
//      date: new Date(`${newEvent.date}T${newEvent.time}`),
//    };

//    setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);
//  };
//   const user = useSelector((state: RootState) => state.auth.status);
//   console.log(user, "user");

//   useEffect(() => {
//     if (user) {
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   });

//   return !loading ? (
//     <div className=" max-h-full">
//       <div className="">
//         <Heading />
//       </div>

//       <div className="  bg-white w-[100%] text-white  ">
//         <Navbar collapse={collapse} setCollapse={setCollapse} />

//         <main
//           className={`flex-1  transition-all duration-300 max-md:ml-20 ${
//             collapse ? "ml-20" : "ml-60"
//           }`}
//         >
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   ) : (
//     <Welcome />
//   );
// }
// export default App;

// import React, { useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Navbar from "./components/sideNavbar/Navbar";
// import Heading from "./components/Heading.tsx";
// import Welcome from "./components/welcome/Welcome.tsx";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store.tsx";

// interface Event {
//   id: number;
//   title: string;
//   message: string;
//   date: Date;
// }

// export const AppContext = React.createContext<{
//   upcomingEvents: Event[];
//   handleSaveEvent: (event: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//     someIntervalId: any;
//   }) => void;
// } | null>(null);

// function App() {
//   const [collapse, setCollapse] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
//   const navigate = useNavigate();

//   const handleSaveEvent = (newEvent: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//     someIntervalId: any;
//   }) => {
//     const eventToAdd: Event = {
//       id: Date.now(),
//       title: newEvent.title,
//       message: newEvent.message,
//       date: new Date(`${newEvent.date}T${newEvent.time}`),
//     };

//     setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);
//     navigate("/home"); // Redirect to home after saving the event
//   };

//   const user = useSelector((state: RootState) => state.auth.status);

//   React.useEffect(() => {
//     setLoading(false);
//   }, [user]);

//   if (loading) {
//     return <Heading />;
//   }

//   return (
//     <AppContext.Provider value={{ upcomingEvents, handleSaveEvent }}>
//       <div className="max-h-full">
//         <div className="">
//           <Heading />
//         </div>

//         <div className="bg-white w-[100%] text-white">
//           <Navbar collapse={collapse} setCollapse={setCollapse} />

//           <main
//             className={`flex-1 transition-all duration-300 max-md:ml-20 ${
//               collapse ? "ml-20" : "ml-60"
//             }`}
//           >
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </AppContext.Provider>
//   );
// }

// export default App;

// import React, { createContext, useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./components/sideNavbar/Navbar";
// import Heading from "./components/Heading";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";

// // Define the structure of an Event
// export interface Event {
//   id: number;
//   title: string;
//   message: string;
//   date: Date;
// }

// // Define the context properties
// interface AppContextProps {
//   upcomingEvents: Event[];
//   handleSaveEvent: (newEvent: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//     someIntervalId: any;
//   }) => void;
// }

// export const AppContext = createContext<AppContextProps | undefined>(undefined);

// const App: React.FC = () => {
//   const [collapse, setCollapse] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

//   // Handle saving a new event
//   const handleSaveEvent = (newEvent: {
//     title: string;
//     date: string;
//     time: string;
//     allDay: boolean;
//     message: string;
//     someIntervalId: any;
//   }) => {
//     const eventToAdd: Event = {
//       id: Date.now(),
//       title: newEvent.title,
//       message: newEvent.message,
//       date: new Date(`${newEvent.date}T${newEvent.time}`),
//     };

//     setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);

//     // Example of scheduling a notification
//     scheduleNotification(eventToAdd);
//   };

//   // Dummy function for scheduling notifications
//   const scheduleNotification = (event: Event) => {
//     // Implement the logic to schedule a notification
//     // This could be a backend API call to schedule a cron job or similar
//     console.log("Scheduling notification for:", event);
//   };

//   const user = useSelector((state: RootState) => state.auth.status);

//   useEffect(() => {
//     setLoading(!user);
//   }, [user]);

//   return (
//     <div className="max-h-full">
//       <div>
//         <Heading />
//       </div>

//       <div className="bg-white w-[100%] text-white">
//         <Navbar collapse={collapse} setCollapse={setCollapse} />

//         <AppContext.Provider value={{ upcomingEvents, handleSaveEvent }}>
//           <main
//             className={`flex-1 transition-all duration-300 max-md:ml-20 ${
//               collapse ? "ml-20" : "ml-60"
//             }`}
//           >
//             <Outlet />
//           </main>
//         </AppContext.Provider>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/sideNavbar/Navbar";
import Heading from "./components/Heading";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

// Define the structure of an Event
export interface Event {
  id: number;
  title: string;
  message: string;
  date: Date;
}

// Define the context properties
interface AppContextProps {
  upcomingEvents: Event[];
  setUpcomingEvents: (events: Event[]) => void;
  handleSaveEvent: (newEvent: {
    title: string;
    date: string;
    time: string;
    allDay: boolean;
    message: string;
    someIntervalId: any;
  }) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [contacts, setContacts] = useState<Event[]>([]);

  // Handle saving a new event
  const handleSaveEvent = (newEvent: {
    title: string;
    date: string;
    time: string;
    allDay: boolean;
    message: string;
    someIntervalId: any;
  }) => {
    const eventToAdd: Event = {
      id: Date.now(),
      title: newEvent.title,
      message: newEvent.message,
      date: new Date(`${newEvent.date}T${newEvent.time}`),
    };

    setUpcomingEvents((prevEvents) => [...prevEvents, eventToAdd]);

    scheduleNotification(eventToAdd);
  };

  const scheduleNotification = (event: Event) => {
    console.log("Scheduling notification for:", event);
  };

  const user = useSelector((state: RootState) => state.auth.status);

  useEffect(() => {
    setLoading(!user);
  }, [user]);

  return (
    <div className="max-h-full h-full">
      <div>
        <Heading />
      </div>

      <div className="bg-white w-[100%] text-white">
        <Navbar collapse={collapse} setCollapse={setCollapse} />

        <AppContext.Provider
          value={{ upcomingEvents, handleSaveEvent, setUpcomingEvents }}
        >
          <main
            className={`flex-1 transition-all duration-300 max-md:ml-20 ${
              collapse ? "ml-20" : "ml-60"
            }`}
          >
            <Outlet />
          </main>

          {children}
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
