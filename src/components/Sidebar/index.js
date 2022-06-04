import React, { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
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
  const { showSidebar, showSiderbar, setSideShow, showSideSub } =
    useContext(HeaderContext);
  return (
    <>
      <SiderbarSection showSidebar={showSidebar}>
        <Icon>
          <CgCloseR onClick={showSiderbar} size={25} color="#7a7a7a" />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarNavWrapper>
              <SidebarNotLink onClick={setSideShow}>meal kit</SidebarNotLink>
              <NavIcon onClick={setSideShow}>
                <IoIosArrowDown
                  color="#010606"
                  style={{
                    transform: showSideSub ? "rotate(-180deg)" : "rotate(0)",
                    transition: "all .2s ease-in-out",
                  }}
                />
              </NavIcon>
              <SubItems showSideSub={showSideSub}>
                <SubNavLinks to="/home-favorites" onClick={showSiderbar}>
                  home favories
                </SubNavLinks>
                <SubNavLinks to="/chefs-choice" onClick={showSiderbar}>
                  chef's choice
                </SubNavLinks>
                <SubNavLinks
                  to="/hot-kitchen-speciality"
                  onClick={showSiderbar}
                >
                  hot kitchen speciality
                </SubNavLinks>
              </SubItems>
            </SidebarNavWrapper>
            <SidebarLink to="/store" onClick={showSiderbar}>
              store
            </SidebarLink>
            <SidebarLink to="/faqs" onClick={showSiderbar}>
              faqs
            </SidebarLink>
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
