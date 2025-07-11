'use client'
import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { egyptianSites, Site } from '@/data/sites';
import { Pin } from '@/components/MapPin';
import { SidePanel } from '@/components/SidePanel';

export default function EgyptInteractiveMap() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  const handlePinClick = (site: Site) => {
    setSelectedSite(site);
  };

  const handleClosePanel = () => {
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Explore Ancient Egypt
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on the pins to discover Egypt's most fascinating historical sites,
            from ancient pyramids to magnificent temples along the Nile.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-[600px] md:h-[700px]">
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
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Legend</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-red-600" fill="currentColor" />
                <span>Historical Sites</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Click pins to explore
              </div>
            </div>

            {/* Site Counter */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
              {egyptianSites.length} Sites
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-items-center">
          <div className="text-center p-4 px-20 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">5000+</div>
            <div className="text-sm text-gray-600">Years of History</div>
          </div>
          <div className="text-center p-4 px-20 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">7</div>
            <div className="text-sm text-gray-600">UNESCO Sites</div>
          </div>
          <div className="text-center p-4 px-20 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600">∞</div>
            <div className="text-sm text-gray-600">Wonders</div>
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