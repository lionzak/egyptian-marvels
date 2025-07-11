'use client'

import { useState } from 'react'
import Image from 'next/image'
import { historicalSites, Site } from '@/data/sites'

export default function MapPage() {
    const [selectedSite, setSelectedSite] = useState<Site | null>(null)
    const [coords, setCoords] = useState<{ x: string; y: string } | null>(null)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        const pos = {
            x: `${x.toFixed(2)}%`,
            y: `${y.toFixed(2)}%`,
        }

        setCoords(pos)
        console.log('📍 Clicked Position:', pos)
    }

    return (
        <div className="p-4 sm:p-6 min-h-screen flex flex-col items-center justify-center">
            {/* Map container with responsive sizing */}
            <div 
                className="relative w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto border-2 border-white" 
                onClick={handleClick}
            >
                {/* Background map image */}
                <Image
                    src="/images/map.png"
                    alt="Egypt Map"
                    fill
                    className="object-contain"
                    priority
                />

                {/* Clickable site icons */}
                {historicalSites.map((site) => (
                    <button
                        key={site.id}
                        className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold hover:scale-110 hover:cursor-pointer text-xs sm:text-sm bg-white bg-opacity-80 rounded px-1 sm:px-2 py-1 shadow-md"
                        style={{ left: site.x, top: site.y }}
                        onClick={(e) => {
                            e.stopPropagation() // prevent map click event
                            setSelectedSite(site)
                        }}
                    >
                        📌 <span className="hidden sm:inline">{site.name}</span>
                        <span className="sm:hidden">{site.name.split(' ')[0]}</span>
                    </button>
                ))}

                {/* Info panel - responsive positioning */}
                {selectedSite && (
                    <div className="absolute top-2 sm:top-6 right-2 sm:right-6 left-2 sm:left-auto bg-white bg-opacity-95 p-4 sm:p-6 rounded shadow-xl z-20 max-w-full sm:max-w-sm">
                        <h2 className="text-lg sm:text-xl font-bold mb-2 text-black">
                            {selectedSite.name}
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {selectedSite.description}
                        </p>
                        <button
                            onClick={() => setSelectedSite(null)}
                            className="text-red-600 text-sm underline mt-4 hover:cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                )}

                {/* Coordinates output - responsive positioning */}
                {coords && (
                    <p className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white bg-black/50 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                        📍 X: <strong>{coords.x}</strong> | Y: <strong>{coords.y}</strong>
                    </p>
                )}
            </div>
        </div>
    )
}