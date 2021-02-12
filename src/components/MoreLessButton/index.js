import React from "react";

import {Button} from "./styles";

import arrowIcon from '../../assets/desktop/icon-arrow-up.svg'

export const MoreLessButton = ({handleShowMore, showMore}) => {
    return (
        <Button onClick={handleShowMore} showMore={showMore}>
            {
                showMore
                    ? 'Less'
                    : 'More'
            }
            <img src={arrowIcon} alt="arrow" showMore={showMore}/>
        </Button>
    )
}