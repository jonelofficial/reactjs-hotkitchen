import React, { useContext } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { HeaderContext } from "../../global_variables/NavContext";
import {
  Icon,
  NavIcon,
  SidebarBackground,
  SidebarLink,
  SidebarMenu,
  SidebarNavWrapper,
  SidebarNotLink,
  SidebarWrapper,
  SiderbarSection,
  SubItems,
  SubNavLinks,
} from "./SidebarElements";

import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const { showSidebar, showSiderbar } = useContext(HeaderContext);
  return (
    <>
      <SiderbarSection showSidebar={showSidebar}>
        <Icon onClick={showSiderbar}>
          <AiOutlineCloseSquare />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarNavWrapper>
              <SidebarNotLink>meal kit</SidebarNotLink>
              <NavIcon>
                <IoIosArrowDown
                  color="#fff"
                  // style={{
                  //   transform: showSub ? "rotate(-180deg)" : "rotate(0)",
                  //   transition: "all .2s ease-in-out",
                  // }}
                />
              </NavIcon>
              <SubItems>
                <SubNavLinks to="/home-favorites">home favories</SubNavLinks>
                <SubNavLinks to="/chefs-choice">chef's choice</SubNavLinks>
                <SubNavLinks to="/hot-kitchen-speciality">
                  hot kitchen speciality
                </SubNavLinks>
              </SubItems>
            </SidebarNavWrapper>
            <SidebarLink to="/store">store</SidebarLink>
            <SidebarLink to="/faqs">faqs</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SiderbarSection>
      <SidebarBackground
        onClick={showSiderbar}
        showSidebar={showSidebar}
      ></SidebarBackground>
    </>
  );
};

export default Sidebar;
