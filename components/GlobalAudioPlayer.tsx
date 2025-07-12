    'use client'
    import {useRef, useState } from 'react'

    const GlobalAudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        const audio = audioRef.current
        if (audio) {
            audio.volume = 0.3
        audio
            .play()
            .then(() => {
            setIsPlaying(true)
            console.log('🎵 Playing music')
            })
            .catch((e) => {
            console.warn('🚫 Autoplay blocked:', e)
            })
        }
    }

    return (
        <>
        <audio
            ref={audioRef}
            src="/music/audio.mp3"
            loop
            preload="auto"
            className="hidden"
        />

        {/* Play Button */}
        {!isPlaying && (
            <button
            onClick={handlePlay}
            className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg z-50"
            >
            ▶ Play Music
            </button>
        )}
        </>
    )
    }

    export default GlobalAudioPlayer
