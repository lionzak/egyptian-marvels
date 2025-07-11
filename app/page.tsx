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
      <Link href="/map" className="absolute top-2 left-2 sm:top-4 sm:left-7 z-50">
        <Image
          src="/images/treasure-map.webp"
          alt="map"
          width={60}
          height={60}
          className="sm:w-20 sm:h-20 hover:scale-110 transition-transform duration-200"
        />
      </Link>

      {/* Responsive Logo Navigation */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
        {/* Mobile Layout (below sm) */}
        <div className="flex gap-1 sm:hidden">
          <Image
            src="/images/egypt.png"
            alt="egypt"
            width={50}
            height={38}
            className="hover:scale-110 transition-transform duration-200"
          />
          <Image
            src="/images/belarus.png"
            alt="belarus"
            width={50}
            height={38}
            className="hover:scale-110 transition-transform duration-200"
          />
          <Image
            src="/images/minstry.png"
            alt="ministry"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-200"
          />
        </div>

        {/* Tablet and Desktop Layout (sm and above) */}
        <div className="hidden sm:flex gap-2 md:gap-3 lg:gap-4">
          <Image
            src="/images/egypt.png"
            alt="egypt"
            width={60}
            height={45}
            className="md:w-20 md:h-15 lg:w-24 lg:h-18 hover:scale-110 transition-transform duration-200"
          />
          <Image
            src="/images/belarus.png"
            alt="belarus"
            width={60}
            height={45}
            className="md:w-20 md:h-15 lg:w-24 lg:h-18 hover:scale-110 transition-transform duration-200"
          />
          <Image
            src="/images/minstry.png"
            alt="ministry"
            width={50}
            height={50}
            className="md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-6">
        {/* Title */}
        <h1 className="text-yellow-600 title-responsive font-bold text-center px-2 mt-12 sm:mt-8 lg:mt-4">
          {artifact.name}
        </h1>

        {/* Model + Description */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8 w-full items-center lg:items-start">
          {/* 3D Model */}
          <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-center lg:items-end space-y-1 sm:space-y-2">
            <div className="flex justify-center lg:justify-end w-full">
              <Image
                src="/images/orbitcontrols.png"
                alt="movement icon"
                width={24}
                height={24}
                className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 translate-y-2 sm:translate-y-4 lg:translate-y-6"
              />
            </div>
            <div className="w-full">
              <ModelViewer modelUrl={artifact.model} uniqueKey={artifact.id} />
            </div>
          </div>

          {/* Description */}
          <motion.div
            key={artifact.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-1/2 xl:w-2/5 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 lg:p-5 text-center lg:text-left space-y-2 sm:space-y-3 shadow-lg"
          >
            <p className="text-xs sm:text-sm lg:text-base text-lime-200 tracking-wide">
              📜 {artifact.period} • 📍 {artifact.location}
            </p>
            <p className="text-orange-100 leading-relaxed font-semibold text-sm sm:text-base lg:text-lg">
              {artifact.description}
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 sm:gap-3 lg:gap-4 mt-3 sm:mt-4 lg:mt-6 w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <button
            onClick={goPrevious}
            disabled={index === 0}
            className="flex-1 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors duration-200 disabled:cursor-not-allowed text-xs sm:text-sm lg:text-base font-medium"
          >
            ◀ Previous
          </button>
          <button
            onClick={goNext}
            disabled={index === artifacts.length - 1}
            className="flex-1 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors duration-200 disabled:cursor-not-allowed text-xs sm:text-sm lg:text-base font-medium"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  )
}