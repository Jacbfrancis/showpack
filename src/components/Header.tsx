import { FaStar, FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/poster.jpeg')] bg-cover bg-center">
      {/* Cinematic dark gradients to blend into your dark navbar and keep text legible */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-0" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/60 via-transparent to-transparent z-0" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 md:px-12 lg:px-16">
        <div className="max-w-2xl space-y-5">
          {/* Featured Film Badge */}
          <div className="flex items-center gap-2 border border-green-400 bg-green-500/30 backdrop-blur-sm rounded-full px-3.5 py-2 text-green-400 text-xs font-bold tracking-wider uppercase w-fit">
            <FaStar className="text-[10px]" />
            <span>Featured Film</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl font-black text-white tracking-tight sm:text-6xl md:text-7xl uppercase">
            Dune: Part Two
          </h1>

          {/* Metadata Section (Rating & Year) */}
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 font-mono">
            <div className="flex items-center gap-1">
              <FaStar className="text-amber-400 text-xs" />
              <span className="text-zinc-200">8.6</span>
            </div>
            <span className="text-zinc-700">•</span>
            <span>2024</span>
          </div>

          {/* Genre Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {["Sci-Fi", "Adventure", "Drama"].map((genre) => (
              <span
                key={genre}
                className="border border-green-400 bg-green-500/30 text-green-400 rounded-full px-4 py-1 text-xs font-medium tracking-wide"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Film Description */}
          <p className="text-base text-zinc-300 leading-relaxed font-normal">
            Paul Atreides unites with Chani and the Fremen while seeking revenge
            against the conspirators who destroyed his family. Facing a choice
            between the love of his life and the fate of the known universe, he
            must prevent a terrible future only he can foresee.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {/* Watch Now Button */}
            <button className="bg-[#7FF221] hover:bg-green-400 text-white font-bold rounded-full px-8 py-3.5 flex items-center gap-2.5 shadow-[0_4px_20px_rgba(34,197,94,0.25)] transition-all active:scale-95">
              <FaPlay className="text-[11px] fill-current" />
              <span className="text-sm tracking-wide">Watch Now</span>
            </button>

            {/* More Info Button */}
            <button className="bg-zinc-900/40 hover:bg-zinc-800/60 text-white font-medium rounded-full px-8 py-3.5 flex items-center gap-2.5 border border-zinc-800 backdrop-blur-sm transition-all active:scale-95">
              <IoInformationCircleOutline className="text-lg" />
              <span className="text-sm tracking-wide">More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
