import { Link } from "react-router-dom";
import styled from "styled-components";

export const SiderbarSection = styled.section`
  background: #f9f9f9;
  width: 80%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 999;

  position: fixed;
  top: 0;
  left: ${({ showSidebar }) => (showSidebar ? "0" : "-100%")};
`;
export const Icon = styled.div`
  padding: 5px;

  display: flex;
  justify-content: flex-end;
`;
export const SidebarWrapper = styled.div`
  display: flex;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SidebarNotLink = styled.div`
  padding: 15px;
  text-transform: uppercase;
`;

export const SidebarNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 100px;
  top: 52px;
`;

export const SubItems = styled.ul`
  display: ${({ showSideSub }) => (showSideSub ? "grid" : "none")};
`;

export const SubNavLinks = styled(Link)`
  list-style: none;
  padding: 15px 15px 15px 30px;
  text-decoration: none;
  color: #010606;
  text-transform: uppercase;

  cursor: none;
`;

export const SidebarLink = styled(Link)`
  padding: 15px;

  text-decoration: none;
  color: #010606;
  text-transform: uppercase;
  cursor: none;
`;

export const SidebarBackground = styled.div`
  display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
  background: #00000096;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
