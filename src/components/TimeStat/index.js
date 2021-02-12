import React from 'react'

import {Stat, StatTitle, StatValue} from "./styles";

export const TimeStat = ({title, value}) => (
    <Stat>
        <StatTitle>{title}</StatTitle>
        <StatValue>{value}</StatValue>
    </Stat>
)