'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 text-gray-800 overflow-x-hidden">
            {/*design by */}
            <div className="fixed top-2 left-2 sm:bottom-4 sm:left-4 text-black text-xs sm:text-sm md:text-base z-40 pointer-events-none">
                разработанный Марком Альбером
            </div>
            {/* Hero */}
            <section className="relative text-center px-4 pt-20 pb-12 sm:pt-28 sm:pb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-800 leading-tight">
                        Egyptian Marvels
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                        Step into ancient Egypt and explore breathtaking 3D artifacts and historical treasures — all in your browser.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/map"
                            className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-800 transition-colors"
                        >
                            Explore Map
                        </Link>
                        <Link
                            href="/artifacts"
                            className="flex justify-center items-center gap-2 px-6 py-3 border border-yellow-700 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
                        >
                            View Artifacts
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                {/* Hero Image */}
                <Image
                    src="/images/view.jpg"
                    alt="Pharaoh"
                    width={600}
                    height={400}
                    className="mx-auto mt-10 rounded-xl shadow-xl"
                />
            </section>

            {/* Features */}
            <section className="px-6 py-12 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: 'Realistic 3D Models',
                            desc: 'Inspect ancient artifacts in full 3D — rotate, zoom, and explore every detail.',
                            icon: '/images/3d.png',
                        },
                        {
                            title: 'Interactive Map',
                            desc: 'Click on locations across Egypt to reveal famous temples, pyramids, and ruins.',
                            icon: '/images/map-view.png',
                        },
                        {
                            title: 'Learn with Legends',
                            desc: 'Discover fascinating stories and cultural facts behind each artifact from Ancient Egypt.',
                            icon: '/images/temple.webp',
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-yellow-50 rounded-xl shadow p-6">
                            {item.title === "Learn with Legends" ? <Image src={item.icon} alt={item.title} width={400} height={200} className="mx-auto mb-4" /> : <Image src={item.icon} alt={item.title} width={200} height={200} className="mx-auto mb-4" />
                            }
                            <h3 className="text-xl font-bold text-yellow-800">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preview section */}
            <section className="py-14 px-4 bg-yellow-100 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-900">Experience the Ancient World</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                    Our collection features real archaeological data, immersive visuals, and smooth 3D performance to take you back in time.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Image
                        src="/images/giza.avif"
                        alt="Giza Preview"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                    <Image
                        src="/images/luxor.webp"
                        alt="Luxor Preview"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                    <Image
                        src="/images/kings.avif"
                        alt="Valley of Kings"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-yellow-700 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Start Your Journey Today</h2>
                <p className="mt-3 text-lg max-w-xl mx-auto">
                    Travel through 5000 years of history. Dive into Egypt’s wonders from the comfort of your screen.
                </p>
                <Link
                    href="/artifacts"
                    className="mt-6 inline-block bg-white text-yellow-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-100 transition"
                >
                    Browse Artifacts
                </Link>
            </section>

            {/* Footer */}
            <footer className="text-center text-sm py-6 text-gray-600 bg-white">
                &copy; {new Date().getFullYear()} Egyptian Marvels. Created By Mark Alber for history lovers.
            </footer>
        </div>
    )
}
