"use client";
import { useState, useEffect, useRef } from "react";

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

interface LoaderProps {
    onLoaded: () => void;
}

const Loader = ({ onLoaded }: LoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [loadedCount, setLoadedCount] = useState(0);
    const [eta, setEta] = useState("Calculating...");
    const [currentFile, setCurrentFile] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const progressRef = useRef(0);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const animateProgress = () => {
            if (progressRef.current < progress) {
                progressRef.current += 1;
                animationRef.current = requestAnimationFrame(animateProgress);
            }
        };
        
        animationRef.current = requestAnimationFrame(animateProgress);
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [progress]);

    useEffect(() => {
        const startTimestamp = Date.now();
        let completed = 0;
        const loadTimes: number[] = [];

        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            
            img.onload = img.onerror = () => {
                const loadTime = Date.now() - startTimestamp;
                loadTimes.push(loadTime);
                completed++;
                
                setLoadedCount(completed);
                setCurrentFile(src.split('/').pop() || "");
                
                const newProgress = Math.round((completed / allImages.length) * 100);
                setProgress(newProgress);
                
                // Calculate ETA
                if (completed > 0) {
                    const avgLoadTime = loadTimes.reduce((a, b) => a + b) / loadTimes.length;
                    const remaining = allImages.length - completed;
                    const estimatedTime = (avgLoadTime * remaining) / completed;
                    
                    if (estimatedTime > 0) {
                        if (estimatedTime < 1000) {
                            setEta(`${Math.ceil(estimatedTime / 100)}s`);
                        } else if (estimatedTime < 60000) {
                            setEta(`${Math.ceil(estimatedTime / 1000)} seconds`);
                        } else {
                            setEta(`${Math.ceil(estimatedTime / 60000)} minute${Math.ceil(estimatedTime / 60000) > 1 ? 's' : ''}`);
                        }
                    }
                }
                
                if(completed === allImages.length) {
                    setIsComplete(true);
                    setTimeout(() => {
                        onLoaded();
                    }, 800); // Brief delay to show completion
                }
            };
        });
    }, [onLoaded]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-gray-900 to-black">
            <div className="relative w-full max-w-2xl px-8">
                {/* Animated background elements */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl animate-pulse"></div>
                
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            <h2 className="text-xl font-semibold text-white">Loading Assets</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-400">Total Files</div>
                            <div className="text-lg font-mono text-white">
                                {loadedCount}/{allImages.length}
                            </div>
                        </div>
                    </div>

                    {/* Progress bar container */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <div className="text-sm text-gray-300">Preparing content...</div>
                            <div className="text-sm font-medium text-blue-400">
                                ETA: {eta}
                            </div>
                        </div>
                        
                        {/* Main progress bar */}
                        <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                            {/* Animated shimmer effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-500/30 to-transparent animate-shimmer"></div>
                            
                            {/* Progress fill with gradient */}
                            <div 
                                className="absolute left-0 top-0 h-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-out rounded-full"
                                style={{ width: `${progressRef.current}%` }}
                            >
                                {/* Glowing effect on progress */}
                                <div className="absolute right-0 top-0 w-4 h-full bg-linear-to-r from-transparent to-white/30 blur-sm"></div>
                            </div>
                        </div>
                        
                        {/* Progress percentage with animation */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-3xl font-bold text-white">
                                {progressRef.current}%
                            </div>
                            <div className="text-sm text-gray-400">
                                {isComplete ? "Complete" : "Processing..."}
                            </div>
                        </div>
                    </div>

                    {/* Current file loading indicator */}
                    <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className={`w-2 h-2 rounded-full ${isComplete ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                                <div className="text-sm text-gray-300 truncate">
                                    {isComplete ? "All assets loaded successfully" : `Loading: ${currentFile}`}
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                                {loadedCount > 0 ? `${((loadedCount / allImages.length) * 100).toFixed(1)}%` : "Starting..."}
                            </div>
                        </div>
                    </div>

                    {/* Loading dots animation */}
                    {!isComplete && (
                        <div className="flex justify-center mt-6 space-x-2">
                            {[1, 2, 3].map((dot) => (
                                <div 
                                    key={dot}
                                    className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                                    style={{ animationDelay: `${dot * 0.1}s` }}
                                ></div>
                            ))}
                        </div>
                    )}

                    {/* Completion indicator */}
                    {isComplete && (
                        <div className="mt-6 p-4 bg-linear-to-r from-blue-500/20 to-green-500/20 rounded-lg border border-blue-500/30">
                            <div className="flex items-center justify-center space-x-3 text-blue-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Ready to proceed</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add custom animations to tailwind config or global CSS */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
}

export default Loader