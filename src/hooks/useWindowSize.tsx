import { useState, useEffect } from "react";

const breakPoint:{
    se: number,
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
    '2xl': number
}  = {
    se: 375,
    xs: 414,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
}

const useWindowSize = () => {

    const isClient = typeof window === 'object';

    const getSize = () => {
        const keys = Object.keys(breakPoint)
        
        return {
            width: window.innerWidth || undefined,
            height: window.innerHeight || undefined,
            breakPoint: keys.reduce<string>((prev:string,_key:string, i:number) => {
                const key = _key as keyof typeof breakPoint;
                const nextKey = (i-1) === keys.length ? key : keys[i+1]
                const pt:number = breakPoint[key]
                if (window.innerWidth > pt) 
                    return nextKey;
                else
                    return prev
            },"se")
        }
    }

    const [windowSize, setWindowSize] = useState(getSize())

    useEffect(()=>{
        if (isClient) {
            const handleResize = () => {
                setWindowSize(getSize());
            } 
            window.addEventListener('resize',handleResize)
            return () => window.removeEventListener('resize', handleResize);
        }
    },[])

    return windowSize
}

export default useWindowSize