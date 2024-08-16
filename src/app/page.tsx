"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { RiPlayCircleLine, RiPauseCircleLine } from "@remixicon/react";
import { useState, useRef, useEffect } from "react";
import { RegisterDialog } from "@/components/modals/RegisterDialog";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [registrations, setRegistrations] = useState<{ name: string; email: string; notes: string }[]>([]);
  const [error, setError] = useState<string | null>(null); // State for error messages
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Playback prevented:", error);
        }
      }
    };

    playAudio();
  }, []);

  const handleUserInteraction = () => {
    setIsUserInteracted(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Playback prevented:", error);
      });
    }
  };

  const togglePlayback = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        await audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Playback prevented:", error);
        }
      }
    }
  };

  const bgCoverUrls = ["/img/bgcover1.jpg", "/img/bgcover2.jpg"];

  return (
    <div className="relative h-screen flex flex-col lg:flex-row" onClick={handleUserInteraction}>
      {/* Background images */}
      <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
        {bgCoverUrls.map((url, index) => (
          <div key={index} className="relative flex-1">
            <Image
              src={url}
              alt={`cover image ${index + 1}`}
              layout="fill"
              className="object-cover object-center opacity-40"
            />
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10 text-center">
        <h1 className="text-[56px] font-bold text-amber-800 font-dancing-script">Our Wedding</h1>
        <p className="text-4xl font-semibold text-amber-800 font-dancing-script">Save the date</p>
        <p className="text-2xl font-medium text-amber-800 font-dancing-script">February 28th 2025</p>
        {/* Register Dialog Trigger */}
        <div className="py-2">
          <RegisterDialog />
        </div>
      </div>

      {/* Audio control */}
      <div className="absolute bottom-4 right-4 z-20">
        {!isUserInteracted && (
          <div className="absolute bottom-4 right-4 z-20 text-white">
            <p className="mb-2">Click anywhere to start music</p>
          </div>
        )}
        {isPlaying ? (
          <button onClick={togglePlayback} className="text-white">
            <RiPauseCircleLine size={40} />
          </button>
        ) : (
          <button onClick={togglePlayback} className="text-white">
            <RiPlayCircleLine size={40} />
          </button>
        )}
        {/* Audio element */}
        <audio ref={audioRef} src="/audio/leanback.mp3" loop className="hidden" />
      </div>
    </div>
  );
};

export default Home;
