import {useEffect, useState} from "react";

export const useCurrentTime = (time) => {
    const date = new Date(time)

    const [currentTime, setCurrentTime] = useState({
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

    const setTime = () => {
        const seconds = currentTime.seconds
        console.log(seconds)
        if (seconds === 59) {
            if (currentTime.minutes === 59) {
                if (currentTime.hour === 11) {
                    setTimeout(() => {
                        setCurrentTime({
                            hour: 0,
                            minutes: 0,
                            seconds: 0
                        })
                    }, 1000)
                } else {
                    setTimeout(() => {
                        setCurrentTime({
                            hour: currentTime.hour + 1,
                            minutes: 0,
                            seconds: 0
                        })
                    }, 1000)
                }
            } else {
                setTimeout(() => {
                    setCurrentTime({
                        hour: currentTime.hour,
                        minutes: currentTime.minutes + 1,
                        seconds: 0
                    })
                }, 1000)
            }
        } else {
            setTimeout(() => {
                setCurrentTime({
                    ...currentTime,
                    seconds: currentTime.seconds + 1
                })
            }, 1000)
        }
    }

    useEffect(() => {
        setTime()
    }, [currentTime.seconds])

    return [currentTime.hour, currentTime.minutes]
}

