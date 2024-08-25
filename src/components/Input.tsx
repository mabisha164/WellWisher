import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  className?: string;
  error?: string | null;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  className,
  error,
  ...props
}) => {
  return (
    <div className="relative w-full min-w-[200px]">
      <input
        id={id}
        {...props}
        required
        className={`${className} peer h-12 w-full border-b border-gray-300 bg-transparent pl-3 pt-4 pb-1.5 text-base text-gray-800 outline-none transition-all focus:border-blue-500 focus:ring-0`}
        placeholder=" " // Add a space as a placeholder to trigger the peer styles
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-4 text-base text-gray-500 transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-500"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
