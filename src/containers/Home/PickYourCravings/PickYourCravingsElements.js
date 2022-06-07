import styled from "styled-components";
import { COLORS } from "../../../global_variables/CSS";
import img from "../../../images/home/cravings/HKstore.jpg";

export const PickYourCravingsWrapper = styled.section`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    background: ${COLORS.primary};
  }
`;

// Bg Section
export const BgSection = styled.div`
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
  height: 380px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BgContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  z-index: 6;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 46px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.2em;
  text-shadow: 4px 4px 11px rgb(0 0 0 / 30%);
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

// Choices Section

export const ChoicesSection = styled.div`
  margin-top: -130px;
  z-index: 2;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 480px) {
    margin-top: -110px;
  }
`;
export const ChoicesContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column1 = styled.div``;
export const Column2 = styled.div``;
export const Column3 = styled.div``;

// Img
export const ImgWrapper = styled.a`
  cursor: pointer;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }
`;

export const Img = styled.img`
  width: 270px;
  max-width: 270%;
  height: 270px;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 250px;
    max-width: 250%;
    height: 250px;
  }
  @media screen and (max-width: 480px) {
    width: 220px;
    max-width: 220%;
    height: 220px;
  }
`;

export const LogoTitle = styled.h2`
  color: #000;
  font-size: 26px;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;

  @media screen and (max-width: 768px) {
    color: #fff;
    font-size: 22px;
    margin-bottom: 16px;
  }
`;
