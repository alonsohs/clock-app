import styled, {css} from "styled-components";

export const Button = styled.button`
  grid-area: button;
  justify-self: end;
  align-self: end;
  
  width:  14.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  border: none;
  border-radius: 3.5em;
  background-color: white;
  
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.8rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
  
  img {
    transition: transform 1s ease;
    ${props => props.showMore && css`
      transform: rotate(180deg);
  `}
  }
  
  
`