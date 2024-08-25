import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to logout? Click Yes to proceed or No to stay."
    );
    if (isConfirmed) {
      alert("Logged out successfully");
      window.location.href = "/login";
    }

    // navigate("/signup");
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
