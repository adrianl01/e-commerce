'use client';

import { retrieveToken } from '@/lib';

// components/Header.tsx

export default function Header() {
  const token = retrieveToken();
  return (
    <nav className="flex items-center justify-between border-b border-[#D9CFC0] bg-[#FAF7F2] px-10 py-[18px]">
      {/* Logo */}
      <div className="flex items-center gap-[10px]" onClick={() => (window.location.href = '/')} style={{ cursor: 'pointer' }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#7A5C3F]">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M10 2C10 2 4 5.5 4 11C4 14.3 6.7 17 10 17C13.3 17 16 14.3 16 11C16 5.5 10 2 10 2Z" fill="#FAF7F2" opacity="0.9" />
            <path d="M10 8V14M7 11H13" stroke="#7A5C3F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <div className="text-[20px] font-medium tracking-[-0.3px] text-[#3B2A1A]">Nido</div>

          <div className="text-[11px] uppercase tracking-[0.8px] text-[#9A7E62]">Home & Living</div>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex gap-7">
        <a href="#" className="text-[14px] text-[#6B5240] transition-colors hover:text-[#3B2A1A]">
          Furniture
        </a>

        <a href="#" className="text-[14px] text-[#6B5240] transition-colors hover:text-[#3B2A1A]">
          Lighting
        </a>

        <a href="#" className="text-[14px] text-[#6B5240] transition-colors hover:text-[#3B2A1A]">
          Decor
        </a>

        <a href="#" className="text-[14px] text-[#6B5240] transition-colors hover:text-[#3B2A1A]">
          New arrivals
        </a>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-3">
        {token ? (
          <button
            className="cursor-pointer rounded-[6px] bg-[#7A5C3F] px-4 py-[7px] text-[13px] text-[#FAF7F2] transition-colors hover:bg-[#5E4530]"
            onClick={() => (window.location.href = '/profile')}
          >
            My account
          </button>
        ) : (
          <button
            className="cursor-pointer rounded-[6px] border border-[#C4AA8A] bg-transparent px-4 py-[7px] text-[13px] text-[#7A5C3F] transition-colors hover:bg-[#EDE4D6]"
            onClick={() => (window.location.href = '/login')}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
}
