import React, { useEffect, useState } from 'react'

const Timer = ({setStop, questionNumber}) => {
    const [timer, setTimer] = useState(3);
    
    useEffect(()=>{
        if(timer === 0) return setStop(true);
         const interval = setInterval(() =>{
            setTimer(prev => prev - 1)
        },1000)
        return() => clearInterval(interval);
    },[timer, setStop])
    
    useEffect(() => {
      setTimer(3) 
    }, [questionNumber])

    return (
        <div>
            {timer}
        </div>
    )
}
export default Timer
