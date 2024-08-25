// import "./index.css";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import App from "./App.tsx";
// import AuthLayout from "./components/Authlayout.tsx";
// import Contact from "./components/contact/Contact.tsx";
// import Dashboard from "./components/dashboard/Dashboard.tsx";
// import { Provider } from "react-redux";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import SignIn from "./components/auth/SignIn.tsx";
// import SignUp from "./components/auth/SignUp.tsx";
// import store from "./store/store.tsx";
// import Groupcontact from "./components/contact/Groupcontact.tsx";
// import Home from "./home/home.tsx";
// import About from "./home/about.tsx";
// import EventForm from "./components/dashboard/Event.tsx";

// // const allEvents = [...pastEvents, ...upcomingEvents];
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/dashboard",
//         element: (
//           <AuthLayout authentication={false}>
//             <Dashboard />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/home",
//         element: (
//           <AuthLayout authentication={false}>
//             <Home />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/groupcontact",
//         element: (
//           <AuthLayout authentication={false}>
//             <Groupcontact />
//           </AuthLayout>
//         ),
//       },

//       {
//         path: "/contact",
//         element: (
//           <AuthLayout authentication={false}>
//             <Contact />
//           </AuthLayout>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/signUp",
//     element: <SignUp />,
//   },
//   {
//     path: "/signIn",
//     element: <SignIn />,
//   },
//   // {
//   //   path:"/event",
//   //   element:<EventForm/>
//   // }
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthLayout from "./components/Authlayout.tsx";
import Contact from "./components/contact/Contact.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./components/auth/SignIn.tsx";
import SignUp from "./components/auth/SignUp.tsx";
import store from "./store/store.tsx";
import Groupcontact from "./components/contact/Groupcontact.tsx";
import Home from "./home/home.tsx";

import EventForm from "./components/dashboard/EventForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication={false}>
            <Dashboard />
          </AuthLayout>
        ),
      },

      {
        path: "/groupcontact",
        element: (
          <AuthLayout authentication={false}>
            <Groupcontact />
          </AuthLayout>
        ),
      },
      {
        path: "/event",
        element: (
          <AuthLayout authentication={false}>
            <EventForm />
          </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: (
          <AuthLayout authentication={false}>
            <Contact />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  // {
  //   path:"/event",
  //   element:<EventForm/>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
