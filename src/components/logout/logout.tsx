// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MdLogout } from "react-icons/md";
// import LogoutModal from "./logoutModal";

// const LogoutButton: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     alert("Logged out successfully");
//     window.location.href = "/signin";

//     // navigate("/signup");
//   };

//   return (
//     <>
//       <button
//         className="bg-white p-2 w-20 rounded-lg hover:bg-cyan-500 hover:text-white"
//         onClick={() => setIsModalOpen(true)}
//       >
//         <MdLogout size={30} className="ml-4" />
//       </button>
//       {isModalOpen && (
//         <LogoutModal
//           onConfirm={handleLogout}
//           onCancel={() => setIsModalOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default LogoutButton;

import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      alert("Logged out successfully");
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <button
      className="bg-white p-2 w-20 rounded-lg hover:bg-cyan-500 hover:text-white"
      onClick={handleLogout}
    >
      <MdLogout size={30} className="ml-4" />
    </button>
  );
};

export default LogoutButton;
