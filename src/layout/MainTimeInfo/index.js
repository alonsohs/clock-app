import React from "react";

import {TimeInfoContainer} from "./styles";

import {Clock} from "../../components/Clock";
import {Quote} from "../../components/Quote";
import {MoreLessButton} from "../../components/MoreLessButton";


export const MainTimeInfo = ({handleShowMore, showMore}) => (
    <TimeInfoContainer>
        <Quote/>
        <Clock/>
        <MoreLessButton handleShowMore={handleShowMore} showMore={showMore}/>
    </TimeInfoContainer>
)