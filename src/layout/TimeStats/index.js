import React from 'react'

import {TimeStatsContainer, Wrapper} from "./styles";

import {TimeStat} from "../../components/TimeStat";

export const TimeStats = ({timezone, day_of_week, day_of_year, week_number, daytime}) => {
    return (
        <TimeStatsContainer daytime={daytime}>
            <Wrapper>
                <TimeStat title={'Current timezone'} value={timezone}  daytime={daytime}/>
                <TimeStat title={'Day of the week'} value={day_of_week} daytime={daytime}/>
                <TimeStat title={'Day of the year'} value={day_of_year} daytime={daytime}/>
                <TimeStat title={'Week number'} value={week_number} daytime={daytime}/>
            </Wrapper>
        </TimeStatsContainer>
    )
}