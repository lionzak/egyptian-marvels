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
                        Египетские Чудеса
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                        Погрузитесь в Древний Египет и исследуйте захватывающие дух 3D артефакты и исторические сокровища — прямо в вашем браузере.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/map"
                            className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-800 transition-colors"
                        >
                            Исследовать Карту
                        </Link>
                        <Link
                            href="/artifacts"
                            className="flex justify-center items-center gap-2 px-6 py-3 border border-yellow-700 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
                        >
                            Смотреть Артефакты
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                {/* Hero Image */}
                <Image
                    src="/images/view.jpg"
                    alt="Фараон"
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
                            title: 'Реалистичные 3D Модели',
                            desc: 'Изучайте древние артефакты в полном 3D — вращайте, увеличивайте и рассматривайте каждую деталь.',
                            icon: '/images/3d.png',
                        },
                        {
                            title: 'Интерактивная Карта',
                            desc: 'Кликайте по локациям по всему Египту, чтобы увидеть известные храмы, пирамиды и руины.',
                            icon: '/images/map-view.png',
                        },
                        {
                            title: 'Учись с Легендами',
                            desc: 'Откройте для себя увлекательные истории и культурные факты о каждом артефакте из Древнего Египта.',
                            icon: '/images/temple.webp',
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-yellow-50 rounded-xl shadow p-6">
                            {item.title === "Учись с Легендами" ? <Image src={item.icon} alt={item.title} width={400} height={200} className="mx-auto mb-4" /> : <Image src={item.icon} alt={item.title} width={200} height={200} className="mx-auto mb-4" />
                            }
                            <h3 className="text-xl font-bold text-yellow-800">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preview section */}
            <section className="py-14 px-4 bg-yellow-100 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-900">Ощути Древний Мир</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                    Наша коллекция основана на реальных археологических данных, захватывающей визуализации и плавной 3D-анимации, чтобы перенести вас в прошлое.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Image
                        src="/images/giza.avif"
                        alt="Гиза Превью"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                    <Image
                        src="/images/luxor.webp"
                        alt="Луксор Превью"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                    <Image
                        src="/images/kings.avif"
                        alt="Долина Царей"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-yellow-700 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Начни Своё Путешествие Сегодня</h2>
                <p className="mt-3 text-lg max-w-xl mx-auto">
                    Путешествуйте сквозь 5000 лет истории. Откройте чудеса Египта, не покидая экран.
                </p>
                <Link
                    href="/artifacts"
                    className="mt-6 inline-block bg-white text-yellow-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-100 transition"
                >
                    Смотреть Артефакты
                </Link>
            </section>

            {/* Footer */}
            <footer className="text-center text-sm py-6 text-gray-600 bg-white">
                &copy; {new Date().getFullYear()} Египетские Чудеса. Создано Марком Альбером для любителей истории.
            </footer>
        </div>
    )
}
