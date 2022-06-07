import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../../global_variables/CSS";

// Header Contact & Social --------------------------
export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  z-index: 999;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "rgb(0 0 0 / 50%) 0px 0px 10px 0px" : "transparent"};

  padding-bottom: ${({ showDetails }) => (showDetails ? "16px" : "0")};
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 480px) {
    height: 90px;
    padding-bottom: 0;
  }
`;

export const HeaderDetailsSection = styled.section`
  /* Layout */
  position: absolute;
  top: ${({ showDetails }) => (showDetails ? "0" : "-100px")};
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderRow1 = styled.div`
  /* Layout */
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderColumnWrapper = styled.div`
  /* Layout */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding: 0 15px;
  }
`;

export const Column1 = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
`;
export const Column2 = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
`;
export const Details = styled.div`
  /* Desgin */
  padding-left: 8px;
  font-size: 12px;
  color: ${({ scrollNav }) => (scrollNav ? "#010606" : "#fff")};
  transition: all 0.3s ease-in-out;
`;

export const IconDetailsWrapper = styled.a`
  /* Layout */
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;

  &:hover ${Details} {
    color: ${COLORS.primary};
  }
`;
export const Icon = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
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

// Header Navigation --------------------------

export const HeaderNavSection = styled.section`
  /* Layout */
  height: 90px;
  padding-top: ${({ showDetails }) => (showDetails ? "50px" : "0")};
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 480px) {
    height: 80px;
    padding-top: 0;
  }
`;
export const HeaderNavColumnWrapper = styled.div`
  /* Layout */
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;

  @media screen and (max-width: 480px) {
    grid-template-columns: 100px auto;
    justify-content: space-between;
    margin-right: 16px;
  }
`;

export const ColumnNav1 = styled.div``;
export const ImgWrapper = styled(Link)`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
export const Img = styled.img`
  /* Layout */
  height: ${({ showDetails }) => (showDetails ? "110px" : "90px")};
  transition: all 0.3s ease-in-out;
  width: auto;

  @media screen and (max-width: 480px) {
    height: 90px;
  }
`;

export const ColumnNav2 = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  /* Layout */
  display: flex;
  justify-content: flex-end;
`;
export const SubItems = styled.ul`
  /* Design */
  margin-top: 20px;
  margin-left: -15px;
  background: #f9f9f9;

  /* Layout */
  position: absolute;
  display: ${({ showSub }) => (showSub ? "flex" : "none")};
  flex-direction: column;
`;

export const SubNavLinks = styled(Link)`
  /* Design */
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${COLORS.primary}!important;
  }
`;

export const SubLinkWrapper = styled.div`
  /* Layout */
  padding: 15px;

  ${SubNavLinks} {
    color: ${({ activeHome, activeChefs, activeHot }) =>
      activeHome || activeChefs || activeHot ? `${COLORS.primary}` : "#010606"};
  }
`;

export const NavNotLinks = styled.div`
  /* Desgin */
  color: ${({ scrollNav }) => (scrollNav ? "#010606" : "#fff")};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  user-select: none;
`;

export const NavItems = styled.li`
  /* Desgin */
  list-style: none;
  padding: 15px;
  border-bottom: ${({ showSub, activeStore, activeFaqs }) =>
    showSub || activeStore || activeFaqs
      ? `3px solid ${COLORS.primary}`
      : "3px solid transparent"};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 3px solid ${COLORS.primary};
  }
`;
export const NavLinks = styled(Link)`
  /* Design */
  text-decoration: none;
  color: ${({ scrollNav }) => (scrollNav ? "#010606" : "#fff")};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
`;

export const NavIcon = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 5px;
`;
export const NavLinksWrapper = styled.div`
  /* Layout */
  display: flex;
`;

// Header Hamburger menu --------------------------

export const HamMenu = styled.div`
  /* Layout */
  display: none;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
export const MenuIconWrapper = styled.div`
  /* Layout */
  display: flex;
  justify-content: flex-end;
`;

// Get height off header on mobile
// const navHeight = document.querySelector(".header-wrapper").offsetHeight;
