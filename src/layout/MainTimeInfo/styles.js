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
`