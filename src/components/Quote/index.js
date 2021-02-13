import React, {useState, useEffect} from "react";

import {QuoteContainer} from "./styles";

import refreshIcon from '../../assets/desktop/icon-refresh.svg'

export const Quote = () => {

    const [quote, setQuote] = useState({
        content: '',
        author: '',
    })

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()

        setQuote({
            ...data
        })
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <QuoteContainer>
            <p>{quote.content}</p>
            <button onClick={fetchQuote}>
                <img src={refreshIcon} alt="refresh"/>
            </button>
            <h5>{quote.author}</h5>
        </QuoteContainer>
    )
}