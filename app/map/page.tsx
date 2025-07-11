'use client'
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { egyptianSites, Site } from '@/data/sites';
import { Pin } from '@/components/MapPin';
import { SidePanel } from '@/components/SidePanel';
import Link from 'next/link';
import Image from 'next/image';

export default function EgyptInteractiveMap() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  const handlePinClick = (site: Site) => {
    setSelectedSite(site);
  };

  const handleClosePanel = () => {
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-2 sm:p-4">
      {/* Arrow + Logos Together */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-8 z-50 flex items-center gap-2 sm:gap-6">
        <Link href="/">
          <ArrowLeft className="text-black hover:text-gray-700 transition-colors duration-200" size={32} />
        </Link>
        <Image
          src="/images/egypt.png"
          alt="egypt"
          width={80}
          height={60}
          className="sm:w-30 sm:h-20 hover:scale-110 transition-transform duration-200"
        />
        <Image
          src="/images/belarus.png"
          alt="belarus"
          width={80}
          height={60}
          className="sm:w-30 sm:h-20 hover:scale-110 transition-transform duration-200"
        />
        <Image
          src="/images/minstry.png"
          alt="ministry"
          width={60}
          height={60}
          className="sm:w-20 sm:h-20 hover:scale-110 transition-transform duration-200"
        />
      </div>


      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8 mt-12 sm:mt-8 lg:mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 px-2">
            Explore Ancient Egypt
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Click on the pins to discover Egypt&apos;s most fascinating historical sites,
            from ancient pyramids to magnificent temples along the Nile.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mx-2 sm:mx-0">
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
            {/* Egypt Map Background */}
            <img
              src="/images/map.webp"
              alt="Egypt Map"
              className="absolute inset-0 w-full h-full object-contain"
              onClick={(e) => {
                const container = e.currentTarget;
                const rect = container.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                console.log(`X: ${x.toFixed(2)}%, Y: ${y.toFixed(2)}%`);
              }}
            />

            {/* Pins */}
            {egyptianSites.map((site) => (
              <Pin
                key={site.id}
                site={site}
                onClick={() => handlePinClick(site)}
              />
            ))}

            {/* Legend */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white bg-opacity-90 rounded-lg p-3 sm:p-4 shadow-lg max-w-36 sm:max-w-none">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Legend</h3>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Image src="/images/pin.webp" alt="Pin" width={16} height={16} className="sm:w-5 sm:h-5" />
                <span>Historical Sites</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Click pins to explore
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 px-2 sm:px-0">
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">5000+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years of History</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">7</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">UNESCO Sites</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">∞</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Wonders</div>
          </div>
        </div>
      </div>

      {/* Side Panel */}
      {selectedSite && (
        <SidePanel
          site={selectedSite}
          onClose={handleClosePanel}
        />
      )}
    </div>
  );
}