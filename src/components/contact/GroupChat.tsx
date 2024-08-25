import React, { useState } from "react";

interface GroupChatProps {
  group: {
    groupName: string;
    groupProfileImageUrl?: string;
    members: {
      name: string;
      email: string;
      profileImageUrl?: string;
    }[];
  };
}

const GroupChat: React.FC<GroupChatProps> = ({ group }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [...prevMessages, newMessage.trim()]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        {group.groupProfileImageUrl ? (
          <img
            src={group.groupProfileImageUrl}
            alt={group.groupName}
            className="w-12 h-12 rounded-full mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        )}
        <h2 className="text-2xl font-semibold text-gray-800">
          {group.groupName}
        </h2>
      </div>
      <div className="border-t border-gray-200 pt-4 mt-4">
        {messages.length > 0 ? (
          <ul className="space-y-4">
            {messages.map((message, index) => (
              <li key={index} className="flex items-start space-x-4">
                {group.members[0]?.profileImageUrl ? (
                  <img
                    src={group.members[0].profileImageUrl}
                    alt={group.members[0].name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                )}
                <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow">
                  <span className="block font-semibold text-gray-800">
                    {group.members[0]?.name}
                  </span>
                  <span className="block text-gray-600">{message}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No messages yet</p>
        )}
      </div>
      <div className="mt-6 flex">
        <input
          type="text"
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm text-black"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-4 px-6 py-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
