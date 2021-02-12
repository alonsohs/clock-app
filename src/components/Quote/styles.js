import styled from "styled-components";

export const QuoteContainer = styled.div`
  color: white;
  
  grid-area: quote;
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-template-rows: max-content max-content;
  row-gap: 2rem;
  
  
  p {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  button {
    background: none;
    border: none;
    height: 3rem;
    display: flex;
    align-items: center;
  }  
  
  h5  {
    font-size: 1.8rem;
  }
`
