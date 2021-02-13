import React from "react";

import {Button} from "./styles";

import arrowIcon from '../../assets/desktop/icon-arrow-up.svg'

export const MoreLessButton = ({handleShowMore, showmore}) => {
    return (
        <Button onClick={handleShowMore} showmore={showmore}>
            {
                showmore
                    ? 'Less'
                    : 'More'
            }
            <img src={arrowIcon} alt="arrow" showmore={showmore}/>
        </Button>
    )
}