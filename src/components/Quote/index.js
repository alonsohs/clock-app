import React from "react";

import {QuoteContainer} from "./styles";

import refreshIcon from '../../assets/desktop/icon-refresh.svg'

export const Quote = () => {
    const content = "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing."
    const author = "Michel de Montaigne"
    return (
        <QuoteContainer>
            <p>{content}</p>
            <button>
                <img src={refreshIcon} alt="refresh"/>
            </button>
            <h5>{author}</h5>
        </QuoteContainer>
    )
}