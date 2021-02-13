import styled, {css} from "styled-components";

import bgDayDesktop from '../assets/desktop/bg-image-daytime.jpg'
import bgDayTablet from '../assets/tablet/bg-image-daytime.jpg'
import bgDayMobile from '../assets/mobile/bg-image-daytime.jpg'
import bgNightDesktop from '../assets/desktop/bg-image-nighttime.jpg'
import bgNightTablet from '../assets/tablet/bg-image-nighttime.jpg'
import bgNightMobile from '../assets/mobile/bg-image-nighttime.jpg'


export const AppContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  


  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.daytime === 'evening' ? bgNightDesktop : bgDayDesktop});
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    filter: brightness(60%);
    z-index: -1;

    @media screen and (max-width: 994px) {
      background-image: url(${props => props.daytime === 'evening' ? bgNightTablet : bgDayTablet});
    }

    @media screen and (max-width: 767px) {
      background-image: url(${props => props.daytime === 'evening' ? bgNightMobile : bgDayMobile});
    }
  }
`

export const Slider = styled.div`
  transition: all 1s ease;
  
  ${props => props.showMore && css`
    transform: translateY(-50vh);

    @media screen and (max-width: 994px) {
      transform: translateY(-45vh);
    }
  `}
`