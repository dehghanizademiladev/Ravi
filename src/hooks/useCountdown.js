import { useEffect, useState } from "react"

export const useCountdown=(duration=120)=>{

    const [isRunning,setIsRunning]=useState(false);
    const [timeLeft,setTimeLeft]=useState(0);
    useEffect(()=>{
        if(timeLeft<=0){
            setIsRunning(false);
        }

        if(!isRunning) return


        const interval=setInterval(() => {
            setTimeLeft((prev)=>prev-1);
        }, 1000);

        return ()=> clearInterval(interval)
    },[isRunning,timeLeft])

    const restart=()=>{
        setTimeLeft(duration);
        setIsRunning(true);
    }

    const getFormatedTime=()=>{
        const minutes= Math.floor(timeLeft/60)
        const seconds=timeLeft%60

        return `${minutes}:${seconds.toString().padStart(2,"0")}`;
    }

    return {
        timeLeft,isRunning,restart,getFormatedTime,
        isExpired:timeLeft==0
    }
}