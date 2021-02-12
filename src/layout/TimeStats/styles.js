import styled from "styled-components";

export const TimeStatsContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: rgba(255,255,255, .6);
  backdrop-filter: blur(40.7742px);
  position: relative;
  
  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 70%;
    background-color:#303030;
    opacity: .25;
    position: absolute;
    left: 50%;
    top: 15%;
  }
`

export const Wrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  column-gap: 20rem;
`