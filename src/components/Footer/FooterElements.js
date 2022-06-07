import styled from "styled-components";
import { COLORS } from "../../global_variables/CSS";

// General
export const FooterSection = styled.footer`
  margin: 46px 0;
  @media screen and (max-width: 1100px) {
    padding: 0 20px;
  }
`;
export const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  /* grid-template-columns: 280px 230px 300px 1fr; */
  grid-template-columns: 26% 20% 25% auto;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const TitleText = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;
export const FooterLink = styled.a`
  color: #7a7a7a;
  font-size: 14px;
  line-height: 1.5em;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
  margin-bottom: 3px;

  &:hover {
    color: ${COLORS.primary};
  }
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Column 1
export const Column1 = styled.div`
  &:nth-child(2) {
    margin-bottom: 26px;
  }
`;

export const Details = styled.div`
  color: #7a7a7a;
  font-size: 14px;
  line-height: 1.5em;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
`;

export const IconDetailsWrapper = styled.a`
  cursor: pointer;
  display: flex;
  margin-bottom: 5px;

  &:hover ${Details} {
    color: ${COLORS.primary};
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const SocialWrapper = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
`;
export const SocialLink = styled.a`
  /* Design */
  padding: 7px;
  border-radius: 100px;
  /* Layout */
  cursor: pointer;
  margin: 0 3px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Spacer = styled.div`
  margin-bottom: 16px;
`;

// Column 2
export const Column2 = styled.div``;

// Column 3
export const Column3 = styled.div``;

// Column 4
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Column4Wrapper = styled.div``;
export const Wrap = styled.div``;
export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 480px) {
    justify-content: center;
    padding-top: 26px;
  }
`;
export const CopyRightText = styled.div`
  color: #7a7a7a;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 400;
  padding-left: 10px;
  font-family: "Fira Sans", sans-serif;
`;
