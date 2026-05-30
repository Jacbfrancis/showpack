import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-transparent sticky top-0 z-50 w-full border-b border-slate-500 backdrop-blur-md px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center select-none">
          <span className="font-sans text-xl font-black tracking-wider text-white sm:text-2xl">
            SHOW
            <span className="text-[#7FF221] drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              PACK
            </span>
          </span>
        </div>

        {/* Search & Actions Container */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:max-w-xl sm:gap-4">
          {/* Search Bar */}
          <form className="w-[70%] mx:auto xs:max-w-[240px] sm:max-w-md">
            <div className="w-full rounded-full border border-[#7FF221] py-2 px-3 relative flex items-center gap-4">
              <span>
                <IoSearch className="text-white" />
              </span>
              <input
                type="text"
                value={searchQuery}
                className="text-sm text-white backdrop:blur-md placeholder-slate-200 w-full outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
              />
            </div>
          </form>

          <button
            type="button"
            aria-label="Favorites"
            className="bg-transparent flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white text-white transition-colors duration-200 hover:border-green-300 hover:text-[#7FF221] hover:bg-[#1B2E18] active:scale-95"
          >
            <span>
              <HiOutlineHeart />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
