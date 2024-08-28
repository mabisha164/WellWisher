import React from "react";

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
        <p>You want to logout?</p>
        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-300 p-2 rounded-lg mr-4"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
