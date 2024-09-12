// // import Button from "./Button";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import img2 from "../assets/IMG2.png";

// // type HeadingProps = {
// //   title: string;
// // };

// const Heading = ({}) => {
//   const [email, setEmail] = useState<string | null>(null);
//   useEffect(() => {
//     // Retrieve the user from localStorage
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     if (user && user.email) {
//       setEmail(user.email);
//     }
//   }, []);
//   return (
//     <div className=" p-2  bg-gradient-to-r from-green-200 to-pink-300 text-black italic rounded-2xl shadow-2xl border-2 border-white flex gap-1 w-full">
//       {/* <h1 className="text-2xl font-bold text-white">{title}</h1> */}
//       <div>
//         <img
//           src={img2}
//           className="h-[60px] w-[60px] rounded-full shadow-2xl"
//         ></img>
//       </div>
//       <Link to={"/home"}>
//         <div className="mt-2 text-4xl shadow-2xl">
//           <span className="text-orange-400 hover:text-white">WELL</span>{" "}
//           <span className="text-gray-600">WISHER</span>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Heading;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/IMG3.png";
import { IoMdAdd } from "react-icons/io";

const Heading = () => {
  // const [firstName, setFirstName] = useState<string>("");

  return (
    <div className="p-2 bg-gradient-to-r from-white to-fuchsia-900 text-black italic rounded-2xl  border-b-4 border-b-white flex gap-1 w-full items-center">
      <div>
        <img
          src={img2}
          className="h-[60px] w-[60px] rounded-full  border border-orange-300 border-spacing-2 border-s-4"
          alt="User Avatar"
        />
      </div>
      <div className="flex-1 relative">
        <Link to={"/"}>
          <div className="mt-2 text-4xl ">
            <span className="text-orange-400 hover:text-white">WELL</span>{" "}
            <span className="text-gray-600">WISHER</span>
          </div>
        </Link>
      </div>
      <div className="bg-gray-100 border border-yellow-300 p-1 w-28 absolute right-16 top-5  rounded-2xl shadow-xl">
        <Link to={"/event"}>
          <div className=" cursor-pointer  flex text-black gap-2 ">
            <IoMdAdd size={22} color="orange" className="mt-1 ml-2" />
            <p className="text-xl italic hover:underline ">Create</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
