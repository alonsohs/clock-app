import styled, {css} from "styled-components";

import backgroundImg from '../assets/desktop/bg-image-daytime.jpg'

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
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    filter: brightness(60%);
    z-index: -1;
  }
`

export const Slider = styled.div`
  transition: all 1s ease;
  
  ${props => props.showMore && css`
    transform: translateY(-50vh);
  `}
`