import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../global_variables/CSS";

export const SiderbarSection = styled.section`
  /* Design */
  background: #f9f9f9;
  width: 80%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 999;

  /* Layout */
  position: fixed;
  top: 0;
  left: ${({ showSidebar }) => (showSidebar ? "0" : "-100%")};
`;
export const Icon = styled.div`
  /* Design */
  padding: 5px;

  /* Layout */
  display: flex;
  justify-content: flex-end;
`;
export const SidebarWrapper = styled.div`
  /* Layout */
  display: flex;
`;

export const SidebarMenu = styled.ul`
  /* Layout */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SidebarNotLink = styled.div`
  /* Design */
  padding: 15px;
  text-transform: uppercase;
`;

export const SidebarNavWrapper = styled.div`
  /* Layout */
  display: grid;
  grid-template-columns: 1fr;
`;

export const NavIcon = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 100px;
  top: 52px;
`;

export const SubItems = styled.ul`
  /* Layouts */
  display: ${({ showSideSub }) => (showSideSub ? "grid" : "none")};
`;

export const SubNavLinks = styled(Link)`
  /* Design */
  list-style: none;
  padding: 15px 15px 15px 30px;
  text-decoration: none;
  color: #010606;
  text-transform: uppercase;
  cursor: none;
`;
export const SubLinkWrapper = styled.div`
  /* Design */
  padding: 15px;

  ${SubNavLinks} {
    color: ${({ activeHome, activeChefs, activeHot }) =>
      activeHome || activeChefs || activeHot ? `${COLORS.primary}` : "#010606"};
  }
`;

export const SidebarLink = styled(Link)`
  /* Design */
  text-decoration: none;
  color: #010606;
  text-transform: uppercase;
  cursor: none;
`;

export const LinkWrapper = styled.div`
  /* Design */
  padding: 15px;
  ${SidebarLink} {
    color: ${({ activeStore, activeFaqs }) =>
      activeStore || activeFaqs ? `${COLORS.primary}` : "#010606"};
  }
`;

export const SidebarBackground = styled.div`
  /* Design */
  background: #00000096;
  top: 0;
  width: 100%;
  height: 100%;
  /* Layout */
  display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
  position: fixed;
  z-index: 1;
`;
