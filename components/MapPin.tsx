import { Site } from "@/data/sites";
import Image from "next/image";

// Pin component with responsive positioning and sizing
export const Pin = ({ site, onClick }: { site: Site; onClick: () => void }) => {
  // Calculate responsive positioning based on screen size
  const getResponsivePosition = () => {
    // Base positions (assuming these are optimized for desktop)
    const baseX = parseFloat(site.x.replace('%', ''));
    const baseY = parseFloat(site.y.replace('%', ''));
    
    // Adjust positions for different screen sizes
    // These adjustments might need fine-tuning based on your actual map image
    const adjustments = {
      // Mobile adjustments (you may need to tweak these values)
      mobile: {
        x: baseX * 1.0, // Slight adjustment for mobile
        y: baseY * 1.0,
      },
      // Tablet adjustments
      tablet: {
        x: baseX * 1.0,
        y: baseY * 1.0,
      },
      // Desktop (original positions)
      desktop: {
        x: baseX,
        y: baseY,
      }
    };
    
    return {
      mobile: `${adjustments.mobile.x}%`,
      tablet: `${adjustments.tablet.x}%`,
      desktop: `${adjustments.desktop.x}%`,
      mobileY: `${adjustments.mobile.y}%`,
      tabletY: `${adjustments.tablet.y}%`,
      desktopY: `${adjustments.desktop.y}%`,
    };
  };

  const positions = getResponsivePosition();

  return (
    <>
      {/* Mobile Pin */}
      <button
        className="absolute z-10 map-pin group block sm:hidden"
        style={{ 
          left: positions.mobile, 
          top: positions.mobileY 
        }}
        onClick={onClick}
      >
        <div className="relative">
          <Image
            src="/images/pin.webp"
            alt="Pin"
            width={32}
            height={32}
            className="w-8 h-8 text-red-600 drop-shadow-lg hover:text-red-700 hover:scale-110 transition-all duration-200 cursor-pointer"
          />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            {site.name}
          </div>
        </div>
      </button>

      {/* Tablet Pin */}
      <button
        className="absolute z-10 map-pin group hidden sm:block lg:hidden"
        style={{ 
          left: positions.tablet, 
          top: positions.tabletY 
        }}
        onClick={onClick}
      >
        <div className="relative">
          <Image
            src="/images/pin.webp"
            alt="Pin"
            width={36}
            height={36}
            className="w-9 h-9 text-red-600 drop-shadow-lg hover:text-red-700 hover:scale-110 transition-all duration-200 cursor-pointer"
          />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            {site.name}
          </div>
        </div>
      </button>

      {/* Desktop Pin */}
      <button
        className="absolute z-10 map-pin group hidden lg:block"
        style={{ 
          left: positions.desktop, 
          top: positions.desktopY 
        }}
        onClick={onClick}
      >
        <div className="relative">
          <Image
            src="/images/pin.webp"
            alt="Pin"
            width={40}
            height={40}
            className="w-10 h-10 text-red-600 drop-shadow-lg hover:text-red-700 hover:scale-110 transition-all duration-200 cursor-pointer"
          />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            {site.name}
          </div>
        </div>
      </button>
    </>
  );
};