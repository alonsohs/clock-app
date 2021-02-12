import React from 'react'

import {ClockContainer, Greeting, ClockTime, TimeZone} from "./styles";

import sunIcon from '../../assets/desktop/icon-sun.svg'
import moonIcon from '../../assets/desktop/icon-moon.svg'

const dayTime = 'morning'
const hour = 11
const minutes = 25
const timeAbreviation = 'CST'
const timeZone = 'Mexico, MX'


export const Clock = () => {
    return (
        <ClockContainer>
            <Greeting>
                <img src={dayTime === 'evening' ? moonIcon : sunIcon} alt="daytime"/>
                <h6>{dayTime === 'morning'
                    ? 'Good morning'
                    : dayTime === 'evening'
                        ? 'Good evening'
                        : 'Good afternoon'
                }</h6>
            </Greeting>
            <ClockTime>
                <h1>{`${hour}:${minutes}`}</h1>
                <h4>{timeAbreviation}</h4>
            </ClockTime>
            <TimeZone>{`In ${timeZone}`}</TimeZone>
        </ClockContainer>
    )
}