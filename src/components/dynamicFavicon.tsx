// app/components/DynamicFavicon.tsx
"use client"; // Mark this as a Client Component

import { useEffect } from "react";

export default function DynamicFavicon() {
  useEffect(() => {
    const favicons = [
      "/favicons/favicon1.ico",
      "/favicons/favicon2.ico",
      "/favicons/favicon3.ico",
      "/favicons/favicon4.ico",
      "/favicons/favicon5.ico",
      "/favicons/favicon6.ico",
      "/favicons/favicon7.ico",
      "/favicons/favicon8.ico"
    ];
    let currentIndex = 0;

    const changeFavicon = () => {
      // Select the favicon <link> element by its rel attribute
      const faviconElement = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
      if (faviconElement) {
        faviconElement.href = favicons[currentIndex];
        currentIndex = (currentIndex + 1) % favicons.length;
      }
    };

    const intervalId = setInterval(changeFavicon, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return null; // This component doesn't render anything
}