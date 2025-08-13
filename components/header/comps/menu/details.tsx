import { useState, useRef } from "react";
import { set } from "react-hook-form";

export function OptionsComp() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000); // Auto-close after 3 seconds
      }}
    >
      <button
        ref={btnRef}
        className="flex items-center text-white border-solid border-white border-[2px] rounded-lg p-2 bg-black hover:bg-gray-800 transition-all duration-300 w-full"
      >
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▲
        </span>
      </button>
      {open && (
        <div className="absolute top-full mb-2 right-0 flex flex-col mt-2 w-56 bg-black border-solid border-white border-[2px] rounded-lg shadow-lg z-50">
          <a
            href="/profile/orders"
            className="hover:bg-pink-400 text-white hover:text-black rounded px-2 py-1 transition"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Your Orders
          </a>
          <a
            href="/profile"
            className="hover:bg-pink-400 text-white hover:text-black rounded px-2 py-1 transition"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Your Profile
          </a>
        </div>
      )}
    </div>
  );
}
