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
export const Icon = styled.div``;
export const SidebarWrapper = styled.div``;
export const SidebarMenu = styled.ul``;
export const SidebarNotLink = styled.div``;
export const SidebarNavWrapper = styled.div``;
export const NavIcon = styled.div``;
export const SubItems = styled.ul``;
export const SubNavLinks = styled.li``;
export const SidebarLink = styled.li``;

export const SidebarBackground = styled.div`
  display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
  background: #00000096;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;
