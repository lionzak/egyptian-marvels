import { Site } from "@/data/sites";
import Image from "next/image";
// Pin component for better visual representation
export const Pin = ({ site, onClick }: { site: Site; onClick: () => void }) => (
  <button
    className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
    style={{ left: site.x, top: site.y }}
    onClick={onClick}
  >
    <div className="relative">
      <Image
        src="/images/pin.webp"
        alt="Pin"
        width={10}
        height={10}
        className="w-8 h-8 text-red-600 drop-shadow-lg hover:text-red-700 hover:scale-110 transition-all duration-200 cursor-pointer"
      />
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {site.name}
      </div>
    </div>
  </button>
);