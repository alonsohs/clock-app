import styled from "styled-components";

export const Stat = styled.div`
  
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const StatTitle = styled.h6`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  line-height: 2.8rem;
  font-weight: normal;
  margin-bottom: 2rem;

  @media screen and (max-width: 994px) {
    font-size: 1.3rem;
    margin: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

export const StatValue = styled.h2`
  font-size: 5.6rem;
  font-weight: bold;
  line-height: 6.8rem;

  @media screen and (max-width: 994px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`


