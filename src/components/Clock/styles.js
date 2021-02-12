import styled from 'styled-components'

export const ClockContainer = styled.div`
  color: white;
  grid-area: clock;
  align-self: end;
  display: grid;
  gap: 2rem;
`

export const Greeting = styled.div`
  display: flex;
  
  h6 {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-left: 2rem;

    @media screen and (max-width: 994px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
`

export const ClockTime = styled.div`
  display: flex;
  align-items: baseline;
  
  h1 {
    font-size: 20rem;
    font-weight: bold;
    line-height: 20rem;
    letter-spacing: -.5rem;
    
    @media screen and (max-width: 994px) {
      font-size: 17.5rem;
      line-height: 17.5rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 10rem;
      line-height: 10rem;
    }
  }
  
  h4 {
    font-size: 4.8rem;
    margin-left: 2rem;
    font-weight: normal;
    
    @media screen and (max-width: 994px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
`

export const TimeZone = styled.h6`
  text-transform: uppercase;
  font-size: 2.4rem;
  letter-spacing: .48rem;

  @media screen and (max-width: 994px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`