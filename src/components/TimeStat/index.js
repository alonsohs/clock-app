import React from 'react'

import {StatTitle, StatValue} from "./styles";

export const TimeStat = ({title, value}) => (
    <div>
        <StatTitle>{title}</StatTitle>
        <StatValue>{value}</StatValue>
    </div>
)