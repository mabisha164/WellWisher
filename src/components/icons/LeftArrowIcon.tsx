// LeftArrowIcon.js
function LeftArrowIcon() {
  return (
    <div>
      <svg
        className="w-6 h-6 text-gray-800 transition duration-75 group-hover:text-gray-300 dark:text-gray-800 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
    </div>
  );
}

export default LeftArrowIcon;
