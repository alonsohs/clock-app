import React from 'react'

import {TimeStatsContainer, Wrapper} from "./styles";

import {TimeStat} from "../../components/TimeStat";

export const TimeStats = () => (
    <TimeStatsContainer>
        <Wrapper>
            <TimeStat title={'Current timezone'} value={'Europe/London'}/>
            <TimeStat title={'Day of the week'} value={'5'}/>
            <TimeStat title={'Day of the year'} value={'295'}/>
            <TimeStat title={'Week number'} value={'42'}/>
        </Wrapper>
    </TimeStatsContainer>
)