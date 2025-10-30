'use client';
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
    {/* {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />} */}
      <Header/>
      <img
        src="/vail-home.webp"
        alt="Home Image"
        className="home-img"
      />
    </>
  );
}
