"use client";

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set playback rate
      const slowmo = () => {
        try {
          video.playbackRate = 0.65;
        } catch (err) {
          // ignore
        }
      };
      video.addEventListener("loadeddata", slowmo);

      // Loop video manually (robust even if loop prop fails)
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener("ended", handleEnded);

      if (video.readyState >= 3) {
        slowmo();
      }

      return () => {
        video.removeEventListener("loadeddata", slowmo);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
        src="/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "brightness(60%)", animationDuration: "2s" }}
      />

      {/* 🔹 Dark overlay (60% black) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Floating background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gray-300/5 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* 🔹 Foreground content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Welcome to My Portfolio
        </h1>
      </div>
      
      <Header />

      {/* Space between Header & Hero */}
      <div className="my-16 md:my-20" />

      <Hero />

      {/* Increased vertical spacing between Hero and Projects */}
      <div className="my-24 md:my-36" />

      <Projects />

      {/* Increased vertical spacing between Projects and Skills */}
      <div className="my-20 md:my-28" />

      <Skills />

      {/* Increased vertical spacing between Skills and Contact */}
      <div className="my-20 md:my-24" />

      <Contact />
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI/ML Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}