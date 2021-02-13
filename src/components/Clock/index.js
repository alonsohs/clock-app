import React, {useState, useEffect} from 'react'
import {useCurrentTime} from "../../hooks/useCurrentTime";

import {ClockContainer, Greeting, ClockTime, TimeZone} from "./styles";

import sunIcon from '../../assets/desktop/icon-sun.svg'
import moonIcon from '../../assets/desktop/icon-moon.svg'

const timeZone = 'Mexico, MX'


export const Clock = ({time, abbreviation, daytime}) => {
    const mql = window.matchMedia('(max-width:767px)')

    const [hour, minutes] = useCurrentTime(time)

    const [timeZone, setTimeZone] = useState({
        region_name: '',
        country_code : '',
        loading: true
    })

    useEffect(() => {
        const fetchTimeZone = async () => {
            const response = await fetch('https://freegeoip.app/json/')
            const data = await response.json()

            setTimeZone({
                ...data,
                loading : false
            })
        }

        fetchTimeZone()
    }, [])
    return (
        <ClockContainer>
            <Greeting>
                <img src={daytime === 'evening' ? moonIcon : sunIcon} alt="daytime"/>
                <h6>{(daytime === 'morning'
                    ? 'Good morning'
                    : daytime === 'evening'
                        ? 'Good evening'
                        : 'Good afternoon') +
                    (mql.matches ? '' : `, It's currently`)
                }</h6>
            </Greeting>
            <ClockTime>
                <h1>{`${(hour < 10 ? '0' : '') + hour}:${(minutes < 10 ? '0' : '') + minutes}`}</h1>
                <h4>{abbreviation}</h4>
            </ClockTime>
            <TimeZone>{timeZone.loading ? 'In' : `In ${timeZone.region_name},${timeZone.country_code}`}</TimeZone>
        </ClockContainer>
    )
}