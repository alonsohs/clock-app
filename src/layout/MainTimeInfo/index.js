import React from "react";

import {TimeInfoContainer} from "./styles";

import {Clock} from "../../components/Clock";
import {Quote} from "../../components/Quote";
import {MoreLessButton} from "../../components/MoreLessButton";


export const MainTimeInfo = ({handleShowMore, showmore, time, abbreviation, daytime}) => (
    <TimeInfoContainer>
        <Quote/>
        <Clock time={time} abbreviation={abbreviation} daytime={daytime}/>
        <MoreLessButton handleShowMore={handleShowMore} showmore={showmore}/>
    </TimeInfoContainer>
)