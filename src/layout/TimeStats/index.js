import React from 'react'

import {TimeStatsContainer, Wrapper} from "./styles";

import {TimeStat} from "../../components/TimeStat";

export const TimeStats = ({timezone, day_of_week, day_of_year, week_number}) => {
    return (
        <TimeStatsContainer>
            <Wrapper>
                <TimeStat title={'Current timezone'} value={timezone}/>
                <TimeStat title={'Day of the week'} value={day_of_week}/>
                <TimeStat title={'Day of the year'} value={day_of_year}/>
                <TimeStat title={'Week number'} value={week_number}/>
            </Wrapper>
        </TimeStatsContainer>
    )
}