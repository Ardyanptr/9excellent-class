"use client";
import { useState, useEffect } from "react";

const allImages = [
  "/images/1.jfif",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jfif",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
];

export default function Loader({ onLoaded }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loaded = 0;
        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loaded++;
                setProgress(Math.round((loaded / allImages.length) * 100));
                if(loaded === allImages.length) onLoaded();
            };
        });
    }, [onLoaded]);

    return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="text-white mb-4 text-lg">Hold on {progress}%</div>
      <div className="w-3/4 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}