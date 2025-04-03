"use client"

import { useState, useRef } from "react"
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react"

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="py-20 bg-[#0055b8]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0055b8] mb-4">Our Approach to Excellence</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch our short video to learn how Aspire HR Consultants is revolutionizing recruitment and HR services
            across the Middle East.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="/placeholder.svg?height=720&width=1280"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/your-company-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

         
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#c19a6b] flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#c19a6b] transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#c19a6b] transition-colors"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>

                <button
                  onClick={handleFullscreen}
                  className="text-white hover:text-[#c19a6b] transition-colors"
                  aria-label="View in fullscreen"
                >
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 -mt-10 relative z-10 mx-4 md:mx-12">
            <h3 className="text-xl font-bold text-[#0055b8] mb-3">Why Choose Aspire HR Consultants?</h3>
            <p className="text-gray-700 mb-4">
              Our unique approach combines deep local market knowledge with innovative recruitment strategies to connect
              the right talent with the right opportunities. We understand the cultural nuances and business landscapes
              across the MENA region, allowing us to deliver tailored solutions that drive organizational success.
            </p>
            <div className="flex justify-end">
              <span className="text-[#c19a6b] font-medium">— Ahmed Al-Mansouri, Founder & CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

