import {useEffect, useState} from "react";

export const useFetchTimeInfo = () => {
    const [timeData, setTimeData] = useState({
        info : {},
        loading: true,
        error : false,
        dayTime : 'morning'
    })

    const fetchTimeInfo = async () => {
        setTimeData({
            ...timeData,
            loading: true
        })

        try {
            const response = await fetch('https://worldtimeapi.org/api/ip')
            const info = await response.json()

            setTimeData({
                ...timeData,
                loading: false,
                info
            })

            console.log(info)
        } catch (e) {
            setTimeData({
                ...timeData,
                loading: false,
                error: e
            })
        }
    }

    useEffect(()=> {
        fetchTimeInfo()
    }, [])

    useEffect(() => {
        const date = new Date(timeData.info.datetime)
        const hour = date.getHours()
        let dayTime = null

        if (hour >= 18 && hour < 5) {
            dayTime = 'evening'
        } else if (hour >= 12 && hour < 18) {
            dayTime = 'afternoon'
        } else {
            dayTime = 'morning'
        }

        setTimeData({
            ...timeData,
            dayTime
        })
    }, [timeData.info])

    return timeData
}


