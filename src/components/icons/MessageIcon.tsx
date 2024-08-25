import React from "react";

type MessageIconProps = {
  className?: string; // Define the type for the className prop
};

const MessageIcon: React.FC<MessageIconProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        className={`flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-white dark:group-hover:text-gray-300 ${className}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707 5-5a1 1 0 1 0-1.414-1.414L10 12.586 8.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" />
      </svg>
    </div>
  );
};

export default MessageIcon;
