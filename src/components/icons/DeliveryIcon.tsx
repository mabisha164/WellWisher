type DashboardIconProps = {
  className?: string; // Define the type for the className prop
};

const DeliveryIcon: React.FC<DashboardIconProps> = ({ className }) => {
  return (
    <div>
      <svg
        className={`${className} flex-shrink-0 w-5 h-5 text-gray-700 transition duration-75 group-hover:text-gray-900 dark:text-black dark:group-hover:text-gray-900`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 2a6 6 0 0 0-6 6v5H3a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-1V8a6 6 0 0 0-6-6ZM8 18a2 2 0 1 0 4 0H8Z" />
      </svg>
    </div>
  );
};

export default DeliveryIcon;
