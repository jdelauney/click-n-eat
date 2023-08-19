import {css, keyframes} from "styled-components";
import {theme} from "./index.ts";


export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInFromBottom = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }

  100%{
    transform: translateY(0%);
    opacity: 1;
  }

`

export const productCardAnimation = css`
  .menu-animation-appear {
    opacity: 0.01;
    //transform: translateX(-120px);
    transform: scale(.1);

    &.menu-animation-appear-active {
      opacity: 1;
      transform: scale(1);
      transition: all ${theme.animations.speed.quick} ease-out;
    }
  }
  
  .menu-animation-enter {
    opacity: 0.01;
    //transform: translateX(-120px);
    transform: scale(.1);

    &.menu-animation-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: all ${theme.animations.speed.quick} ease-out;
    }
  }
  
  .menu-animation-exit {
    opacity: 1;
    transform: translateY(0);

    &.menu-animation-exit-active {
      opacity: 0.01;
      transition: ${theme.animations.speed.quick} ease-out;
    }
  }
`

export const basketCardAnimation = css`
    .basketCardsAnimation-appear {
      transform: translateX(-100px);
      opacity: 0;
  }

  .basketCardsAnimation-appear-active {
      transition: all .5s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    
  }
  
  .basketCardsAnimation-enter {
      transform: translateX(-100px);
      opacity: 0;
    
    &.basketCardsAnimation-enter-active {
      transition: all .5s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
  }

  


  .basketCardsAnimation-exit {
      transform: translateX(0);
      opacity: 1;
    
    &.basketCardsAnimation-exit-active {
      transition: all .5s ease-in-out;
      transform: translateX(-100px);
      opacity: 0;
    }
    
  }

 
`