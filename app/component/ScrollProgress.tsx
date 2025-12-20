"use client"

import { useEffect, useState, useRef } from "react"

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0)
    const ticking = useRef(false)

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY
            const height = 
                document.documentElement.scrollHeight - window.innerHeight
            
            setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
            ticking.current = false
        }

        const onScroll = () => {
            if(!ticking.current) {
                ticking.current = true
                requestAnimationFrame(update)
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return(
        <div className="fixed top-0 left-0 z-[9999] h-[3px] w-full bg-transparent">
            <div className="h-full bg-blue-500 transition-all duration-75" style={{ width: `${progress}%` }} />
        </div>  
    )
}

export default ScrollProgress