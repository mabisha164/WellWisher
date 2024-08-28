// import DashboardIcon from "../icons/DashboardIcon";
// import DeliveryIcon from "../icons/DeliveryIcon";
// import LeftArrowIcon from "../icons/LeftArrowIcon";
// import { Link } from "react-router-dom";
// // import LogoutIcon from "../icons/LogoutIcon";
// import MessageIcon from "../icons/MessageIcon";
// import React from "react";
// import RightArrowIcon from "../icons/RightArrowIcon";
// import { MdLogout } from "react-icons/md";
// import { VscSettingsGear } from "react-icons/vsc";
// // import { MdOutlineEventAvailable } from "react-icons/md";

// interface NavbarProps {
//   collapse: boolean;
//   setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface Feature {
//   title: string;
//   link: string;
//   icon: JSX.Element;
//   subItems?: Feature[];
// }

// const features: Feature[] = [
//   {
//     title: "Dashboard",
//     link: "/dashboard",
//     icon: <DashboardIcon />,
//   },
//   {
//     title: "Contact",
//     link: "/contact",
//     icon: <MessageIcon />,
//     subItems: [
//       {
//         title: "Contact",
//         link: "/contact",
//         icon: <MessageIcon />,
//       },
//       {
//         title: "Group Contact",
//         link: "/groupContact",
//         icon: <MessageIcon />,
//       },
//     ],
//   },
//   {
//     title: "Delivery status",
//     link: "/deliveryStatus",
//     icon: <DeliveryIcon />,
//   },

//   // Ensure you do not have an empty object which might cause runtime errors
// ];

// const Navbar: React.FC<NavbarProps> = ({ collapse, setCollapse }) => {
//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 bg-[#2b2b2b] text-white transition-width max-md:w-20 duration-300 ${
//         collapse ? "w-20" : "w-60"
//       }`}
//       aria-label="Sidebar"
//     >
//       <div className="px-6 py-10 relative overflow-y-auto h-full ">
//         <div
//           className="absolute right-2 top-0 max-md:hidden cursor-pointer"
//           onClick={() => setCollapse(!collapse)}
//         >
//           {collapse ? <RightArrowIcon /> : <LeftArrowIcon />}
//         </div>
//         <ul className="space-y-2 font-medium">
//           {features.map((feature, index) => (
//             <li key={index}>
//               <Link
//                 to={feature.link}
//                 className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group font-bold"
//               >
//                 {feature.icon}
//                 {!collapse && (
//                   <span className="ms-4 max-md:hidden ">{feature.title}</span>
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-auto w-full flex items-center justify-start space-x-10   ">
//           <Link
//             to="/settings" // Ensure the correct path
//             className="flex items-center p-2 text-black rounded-lg dark:text-white  dark:hover:bg-gray-700 hover:text-gray-700 group absolute  left-4 bottom-2 font-bold"
//           >
//             <button className="bg-white p-2 w-20 rounded-lg hover:bg-cyan-500 hover:text-white">
//               <VscSettingsGear size={30} className="ml-4 " />
//             </button>
//             {!collapse && <span className="ms-3 max-md:hidden"></span>}
//           </Link>
//           <Link
//             to="/signup"
//             className="flex items-center p-2 text-black rounded-lg dark:text-white  hover:text-gray-700 dark:hover:bg-gray-700 group absolute  left-20 bottom-2 font-bold "
//           >
//             <button className="bg-white p-2 w-20 rounded-lg hover:bg-cyan-500 hover:text-white">
//               <MdLogout size={30} className="ml-4 " />
//             </button>
//             {!collapse && <span className="ms-3 max-md:hidden"></span>}
//           </Link>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Navbar;
// Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "../icons/DashboardIcon";

import LeftArrowIcon from "../icons/LeftArrowIcon";

import RightArrowIcon from "../icons/RightArrowIcon";
import { MdLogout } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

interface NavbarProps {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Feature {
  title: string;
  link: string;
  icon: JSX.Element;
  subItems?: Feature[];
}

const features: Feature[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <SiTicktick color="#1E90FF" size={20} />,
  },
  {
    title: "Contact",
    link: "/",
    icon: <IoIosArrowDropdown size={28} color="#1E90FF" />,
    subItems: [
      {
        title: "Contact",
        link: "/contact",
        icon: <RiContactsLine size={24} color="#1E90FF" />,
      },
      {
        title: "Group Contact",
        link: "/groupcontact",
        icon: <IoIosContacts size={28} color="#1E90FF" />,
      },
    ],
  },
  // {
  //   title: "Delivery status",
  //   link: "/deliveryStatus",
  //   icon: <DeliveryIcon />,
  // },
];

const Navbar: React.FC<NavbarProps> = ({ collapse, setCollapse }) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubMenuToggle = (title: string) => {
    if (openSubMenu === title) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(title);
    }
  };
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        const user = JSON.parse(userString);
        if (user && user.firstName && user.lastName) {
          setFirstName(user.firstName);
          setLastName(user.lastName);
        } else {
          console.error("User email not found in the parsed data.");
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  return (
    <aside
      className={`absolute top-16 mt-4 inset-y-0 left-0 bg-gray-200 text-gray-900 transition-width max-md:w-20 duration-300 rounded-2xl shadow-2xl border-4 border-r-white  h-full ${
        collapse ? "w-20" : "w-60"
      }`}
      aria-label="Sidebar"
    >
      <div className="px-6 py-4 relative overflow-y-auto h-full">
        <div
          className="absolute right-2 top-0 max-md:hidden cursor-pointer"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? <RightArrowIcon /> : <LeftArrowIcon />}
        </div>
        <ul className="space-y-2 font-medium">
          {features.map((feature, index) => (
            <li key={index}>
              <div>
                {feature.subItems ? (
                  <div
                    className="flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white hover:text-gray-700 group font-bold cursor-pointer"
                    onClick={() => handleSubMenuToggle(feature.title)}
                  >
                    {feature.icon}
                    {!collapse && (
                      <span className="ms-4 max-md:hidden">
                        {feature.title}
                      </span>
                    )}
                  </div>
                ) : (
                  <Link
                    to={feature.link}
                    className="flex items-center p-2 text-black rounded-lg dark:text-gray-800 hover:bg-white dark:hover:bg-white hover:text-gray-700 group font-bold"
                  >
                    {feature.icon}
                    {!collapse && (
                      <span className="ms-4 max-md:hidden">
                        {feature.title}
                      </span>
                    )}
                  </Link>
                )}
                {feature.subItems && openSubMenu === feature.title && (
                  <ul className="pl-2 mt-2 space-y-2">
                    {feature.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          className="flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group font-bold"
                        >
                          {subItem.icon}
                          <span className="ms-4 max-md:hidden">
                            {subItem.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto w-full   items-center justify-start space-y-1 md:space-y-0 md:space-x-2 md:w-32 lg:w-48">
          {email ? (
            <div className="mt-2  text-gray-800 text-center  md:absolute md:left-2 md:bottom-36 flex">
              <img
                src="path_to_avatar_image"
                alt="Avatar"
                className="w-6 h-6 rounded-full mr-1 border border-white"
              />
              <span> {firstName}</span>
              <span> {lastName}</span>
            </div>
          ) : (
            <div className="mt-2 text-xl text-gray-800">
              <span></span>
            </div>
          )}
          <Link
            to="/settings"
            className=" items-center p-2 text-black rounded-lg dark:text-white   group relative md:absolute md:left-1 md:bottom-20 font-bold hover:text-white hover:bg-gray-100 w-[80%]"
          >
            <button className=" p-2 w-full md:w-16 rounded-lg  hover:text-white">
              <VscSettingsGear size={24} className="mx-auto " color="black" />
            </button>
            {!collapse && <span className="ms-3 max-md:hidden"></span>}
          </Link>

          <Link
            to="/signup"
            className="flex items-center  text-black rounded-lg dark:text-black hover:text-gray-700  group relative md:absolute md:left-2 md:bottom-8 font-bold hover:bg-gray-100 w-[80%]"
          >
            <button className=" p-2 w-full md:w-16 rounded-lg  e">
              <MdLogout size={24} className="mx-auto " />
            </button>
            {!collapse && <span className="ms-3 max-md:hidden"></span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
