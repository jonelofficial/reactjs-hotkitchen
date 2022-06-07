import styled from "styled-components";
import { COLORS } from ".././../global_variables/CSS";

export const HomeSection = styled.section`
  /* Design */
  height: 100vh;

  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const BgOverlay = styled.div`
  background-color: #000000b0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 5;
`;

export const BackgroundImg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100vw;
  height: 100%;

  animation: animate 20s linear infinite;
  opacity: 1;
  transform: scale(1.2);

  &:nth-child(1) {
    animation-name: ani-1;
    z-index: 3;
  }
  &:nth-child(2) {
    animation-name: ani-2;
    z-index: 2;
  }
  &:nth-child(3) {
    animation-name: ani-3;
    z-index: 1;
  }
  &:nth-child(4) {
    animation-name: ani-4;
    z-index: 0;
  }

  @keyframes ani-1 {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }
    1.5% {
      opacity: 1;
    }
    23% {
      opacity: 1;
    }
    26% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
    98% {
      opacity: 0;
      transform: scale(1.22);
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes ani-2 {
    23% {
      opacity: 1;
      transform: scale(1.2);
    }
    26% {
      opacity: 1;
    }
    48% {
      opacity: 1;
    }
    51% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @keyframes ani-3 {
    48% {
      opacity: 1;
      transform: scale(1.2);
    }
    51% {
      opacity: 1;
    }
    73% {
      opacity: 1;
    }
    76% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @keyframes ani-4 {
    73% {
      opacity: 1;
      transform: scale(1.2);
    }
    76% {
      opacity: 1;
    }
    98% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
    /* 100% {
      opacity: 0;
      transform: scale(1.2);
    } */
  }
`;

export const HomeContainer = styled.div`
  z-index: 6;
  max-width: 1100px;
`;
export const HomeWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonHover = styled.div`
  padding: 15px 18px;

  background: ${COLORS.secondary};
  color: #fff;
  font-family: "Fira Sans", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;

  /* Layout */
  position: absolute;
  top: 0;
  left: -100%;
  &:hover {
  }
`;

export const ButtonHero = styled.div`
  color: #fff;
  font-family: "Fira Sans", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1em;
  cursor: pointer;
  transition: bottom 0.4s ease-in-out;
  bottom: 0;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  background: ${COLORS.primary};
  position: relative;
  padding: 15px 40px;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border: none;

  &:hover ${ButtonHero} {
    transition: bottom 0.4s ease-in-out;

    bottom: -50px;
  }

  &:hover ${ButtonHover} {
    left: 0;
  }

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;
