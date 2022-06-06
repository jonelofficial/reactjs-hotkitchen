import styled from "styled-components";
import { COLORS } from "../global_variables/CSS";

export const Title = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: 4px 4px 11px rgb(0 0 0 / 30%);
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const TitleText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 56px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.2em;
  text-shadow: 4px 4px 11px rgb(0 0 0 / 30%);
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Button = styled.div`
  color: #fff;
  font-family: "Fira Sans", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;
