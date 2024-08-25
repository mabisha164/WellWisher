import React from "react";

interface ChatMessageProps {
  message: string;
  sender: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  return (
    <div
      className={`p-2 rounded-lg mb-2 ${
        sender === "me"
          ? "bg-blue-600 text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
    >
      <p className="font-semibold">{sender}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
