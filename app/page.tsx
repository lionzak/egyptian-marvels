'use client'

import { useState } from 'react'
import artifacts from '@/data/artifacts.json'
import ModelViewer from '@/components/ModelViewer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ArtifactsPage() {
  const [index, setIndex] = useState(0)
  const artifact = artifacts[index]

  const goNext = () => {
    if (index < artifacts.length - 1) setIndex(index + 1)
  }

  const goPrevious = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Map Icon */}
      <Link href="/map" className="absolute top-4 left-4 z-50">
        <Image
          src="/images/treasure-map.webp"
          alt="map"
          width={80}
          height={80}
        />
      </Link>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 flex flex-col items-center space-y-4 sm:space-y-6">
        {/* Title */}
        <h1 className="text-yellow-600 text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-2">
          {artifact.name}
        </h1>

        {/* Model + Description */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full items-start">
          {/* 3D Model */}
          <div className="w-full lg:w-full lg:max-w-md flex flex-col items-center lg:items-end space-y-1">
            <div className="flex justify-center lg:justify-end w-full">
              <Image
                src="/images/orbitcontrols.png"
                alt="movement icon"
                width={32}
                height={32}
                className="sm:w-10 sm:h-10 translate-y-4 sm:translate-y-6"
              />
            </div>
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto">
              <ModelViewer modelUrl={artifact.model} uniqueKey={artifact.id} />
            </div>
          </div>

          {/* Description */}
          <motion.div
            key={artifact.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-full lg:max-w-lg w-auto self-start backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 text-center lg:text-left space-y-2 shadow-lg"
          >
            <p className="text-xs sm:text-sm text-lime-200 tracking-wide">
              📜 {artifact.period} • 📍 {artifact.location}
            </p>
            <p className="text-orange-100 leading-relaxed font-semibold text-sm sm:text-base">
              {artifact.description}
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 w-full max-w-sm">
          <button
            onClick={goPrevious}
            disabled={index === 0}
            className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
          >
            ◀ Previous
          </button>
          <button
            onClick={goNext}
            disabled={index === artifacts.length - 1}
            className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  )

}