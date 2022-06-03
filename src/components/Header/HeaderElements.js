import { Link } from "react-router-dom";
import styled from "styled-components";

// Header Contact & Social --------------------------

export const HeaderDetailsSection = styled.section`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderRow1 = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderColumnWrapper = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;

export const Column1 = styled.div`
  display: flex;
  align-items: center;
`;
export const Column2 = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const IconDetailsWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  padding-left: 8px;
  font-size: 12px;
  color: #fff;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SocialLink = styled.a`
  cursor: pointer;
  margin: 0 3px;
  display: flex;
  align-items: center;
`;

// Header Navigation --------------------------

export const HeaderNavSection = styled.section`
  height: 100px;
`;
export const HeaderNavColumnWrapper = styled.div`
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
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Img = styled.img`
  height: 100px;
  width: auto;
  @media screen and (max-width: 480px) {
    height: 80px;
  }
`;

export const ColumnNav2 = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
export const SubItems = styled.ul`
  margin-top: 10px;
  background: #f9f9f9;

  position: absolute;
  display: ${({ showSub }) => (showSub ? "flex" : "none")};
  flex-direction: column;
`;
export const SubNavLinks = styled(Link)`
  text-decoration: none;
  color: #010606;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  padding: 15px;
`;

export const NavNotLinks = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const NavItems = styled.li`
  list-style: none;
  padding: 15px;
`;
export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const NavLinksWrapper = styled.div`
  display: flex;
`;

// Header Hamburger menu --------------------------

export const HamMenu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
export const MenuIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-right: 16px; */
`;
