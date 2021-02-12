import styled from "styled-components";


export const TimeInfoContainer  = styled.div`
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 1100px;
  
  margin: 0 auto ;
  padding:5rem 2rem 8rem ;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "quote ." "clock button ";
  
  @media screen and (max-width: 994px) {
    padding: 5rem 10rem 5rem 5rem;
    
    grid-template-rows: 1fr 1fr max-content;
    grid-template-columns: 1fr;
    grid-template-areas: "quote" "clock" "button";
    gap: 10rem;
  }

  @media screen and (max-width: 767px) {
    padding:5rem 3rem;
    gap: 5rem;
  }
`