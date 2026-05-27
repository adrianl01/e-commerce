'use client';

import { logout, retrieveToken } from '@/lib/storage';

export default function Footer() {
  const token = retrieveToken();
  return (
    <footer className="mt-6 flex items-center justify-between align-middle bg-[#3B2A1A] px-10 py-6">
      {/* Brand */}
      <div className="flex items-center gap-[10px]">
        <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#7A5C3F]">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M10 2C10 2 4 5.5 4 11C4 14.3 6.7 17 10 17C13.3 17 16 14.3 16 11C16 5.5 10 2 10 2Z" fill="#FAF7F2" opacity="0.9" />
          </svg>
        </div>

        <div>
          <div className="text-[16px] font-medium text-[#FAF7F2]">Nido</div>

          <div className="mt-[2px] text-[12px] text-[#9A7E62]">Home & Living</div>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        {/* {token ? (
          <a href="/profile" className="text-[13px] text-[#B0957A] transition-colors hover:text-[#FAF7F2]">
            My profile
          </a>
        ) : (
          <a href="/login" className="text-[13px] text-[#B0957A] transition-colors hover:text-[#FAF7F2]">
            Log in
          </a>
        )} */}

        {token && (
          <button
            onClick={() => {
              logout();
              window.location.href = '/';
            }}
            className="text-[13px] text-[#B0957A] transition-colors hover:text-[#FAF7F2]"
          >
            Log out
          </button>
        )}
      </div>

      {/* Copyright */}
      <div className="text-[12px] text-[#6B5240]">© 2026 Nido. All rights reserved.</div>
    </footer>
  );
}
