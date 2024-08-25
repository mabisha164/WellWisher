import React from "react";
import { Link } from "react-router-dom";

interface AboutProps {
  title1: string;
  title2: string;
  //   description: string;
}

const about: AboutProps[] = [
  {
    title1: "About Us",
    title2: "Customer Care",
  },
];

const About: React.FC<AboutProps> = ({ title1, title2 }) => {
  const verticalLineStyle = {
    width: "2px",
    height: "200px",
    backgroundColor: "#ccc",
    display: "inline-block",
    verticalAlign: "middle",
  };
  return (
    <div className="bg-green-50 w-full min-width: 640px border-2 border-white rounded-2xl shadow-2xl ">
      <div className="  flex justify-around">
        <div className="text-black   ">
          <div className="text-4xl italic text-center p-2 underline text-orange-500">
            {title1}
          </div>
          <div className="text-l text-gray-600 mt-4 tracking-wide md:tracking-wide">
            Our mission is simple: to help you stay alert and <br />
            organized when it comes to the events that truly count. Whether{" "}
            <br />
            it's a loved one's birthday, a special anniversary, or an important
            meeting,
            <br />
            WellWisher is here to help you stay on top of it all.
          </div>
        </div>
        <div style={verticalLineStyle} className="mt-6"></div>
        <div>
          {" "}
          <div className=" text-4xl italic text-center p-2 underline text-orange-500">
            {title2}
          </div>
          <p className=" text-l text-gray-600 mt-4 tracking-wide md:tracking-wide">
            At Wellwisher ,your satisfaction is our top priority.
            <br />
            We are dedicated to providing you with the best possible experience
            <br />
            as you use our apps to stay connected and oragnized. our customer
            care
            <br />
            team is here to assist you with any questions,concerns ,or issues
            you may encounter.
          </p>
        </div>
      </div>
      <div className="text-center mr-20">
        <div className="text-4xl italic text-center p-2 underline text-orange-500 ">
          Links
        </div>
        <div className="flex justify-center gap-8 underline text-gray-800 text-xl italic">
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/setting">Setting</Link>
        </div>
      </div>
    </div>
  );
};

// Example of rendering the About component
const AboutPage: React.FC = () => {
  return (
    <div>
      {about.map((item, index) => (
        <About key={index} title1={item.title1} title2={item.title2} />
      ))}
    </div>
  );
};

export default AboutPage;

// import React from "react";
// import { Link } from "react-router-dom";

// const About: React.FC = () => {
//   return (
//     <div className="bg-green-50 w-full mx-auto p-4 border-2 border-white rounded-2xl shadow-2xl">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         <div className="text-black w-full md:w-1/2 text-center md:text-left ">
//           <div className="text-4xl italic p-2 underline text-orange-500">
//             About Us
//           </div>
//           <div className="text-lg text-gray-600 mt-4 tracking-wide">
//             Our mission is simple: to help you stay alert and organized when it
//             comes to the events that truly count. Whether it's a loved one's
//             birthday, a special anniversary, or an important meeting, WellWisher
//             is here to help you stay on top of it all.
//           </div>
//         </div>
//         <div className="hidden md:block w-px h-36 bg-gray-300 my-6"></div>
//         <div className="text-black w-full md:w-1/2 text-center md:text-left ">
//           <div className="text-4xl italic p-2 underline text-orange-500">
//             Customer Care
//           </div>
//           <p className="text-lg text-gray-600 mt-4 tracking-wide">
//             At WellWisher, your satisfaction is our top priority. We are
//             dedicated to providing you with the best possible experience as you
//             use our apps to stay connected and organized. Our customer care team
//             is here to assist you with any questions, concerns, or issues you
//             may encounter.
//           </p>
//         </div>
//       </div>
//       <div className="text-center mt-8">
//         <div className="text-4xl italic p-2 underline text-orange-500">
//           Links
//         </div>
//         <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 underline text-gray-800 text-xl italic">
//           <Link to="/contact">Contact</Link>
//           <Link to="/dashboard">Dashboard</Link>
//           <Link to="/setting">Setting</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
