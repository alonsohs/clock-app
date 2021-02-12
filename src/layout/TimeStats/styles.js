import styled from "styled-components";

export const TimeStatsContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: rgba(255,255,255, .6);
  backdrop-filter: blur(40.7742px);
  position: relative;

  @media screen and (max-width: 994px) {
    height: 45vh;
  }
  
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
    @media screen and (max-width: 994px) {
      display: none;
    }
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

  @media screen and (max-width: 994px) {
    padding: 10rem 5rem;
    column-gap: 4rem;
  }

  @media screen and (max-width: 767px) {
    padding: 5rem 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`