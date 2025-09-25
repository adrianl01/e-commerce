import { useState, useRef } from "react";
import { set } from "react-hook-form";

export function OptionsComp() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => {
      //   setTimeout(() => {
      //     setOpen(false);
      //   }, 3000);
      // }}
      // onMouseEnter={() => {
      //   setOpen(true);
      //    // Auto-close after 3 seconds
      // }}
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
        <div
          className="absolute top-full mb-2 right-0 flex flex-col w-56 border-transparent bg-transparent z-50"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex flex-col  p-2 gap-2 mt-2 border-solid border-white border-[2px] rounded-lg bg-black">
            <a
              href="/profile/orders"
              className="hover:bg-pink-400 text-white hover:text-black rounded px-2 py-1 transition"
            >
              Your Orders
            </a>
            <a
              href="/profile"
              className="hover:bg-pink-400 text-white hover:text-black rounded px-2 py-1 transition"
              onMouseEnter={() => setOpen(true)}
            >
              Your Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
