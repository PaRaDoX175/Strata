import { useEffect, useState } from 'react'

export default function useCheckWidth(width) {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth >= width)
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width])

    return isMobile
}