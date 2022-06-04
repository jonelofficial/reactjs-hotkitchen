import React, { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { HeaderContext } from "../../global_variables/NavContext";
import {
  Icon,
  LinkWrapper,
  NavIcon,
  SidebarBackground,
  SidebarLink,
  SidebarMenu,
  SidebarNavWrapper,
  SidebarNotLink,
  SidebarWrapper,
  SiderbarSection,
  SubItems,
  SubLinkWrapper,
  SubNavLinks,
} from "./SidebarElements";

import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const {
    showSidebar,
    showSiderbar,
    setSideShow,
    showSideSub,
    activeStore,
    activeFaqs,
    activeHome,
    activeChefs,
    activeHot,
  } = useContext(HeaderContext);
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
                <SubLinkWrapper activeHome={activeHome}>
                  <SubNavLinks to="/home-favorites" onClick={showSiderbar}>
                    home favories
                  </SubNavLinks>
                </SubLinkWrapper>
                <SubLinkWrapper activeChefs={activeChefs}>
                  <SubNavLinks to="/chefs-choice" onClick={showSiderbar}>
                    chef's choice
                  </SubNavLinks>
                </SubLinkWrapper>
                <SubLinkWrapper activeHot={activeHot}>
                  <SubNavLinks
                    to="/hot-kitchen-speciality"
                    onClick={showSiderbar}
                  >
                    hot kitchen speciality
                  </SubNavLinks>
                </SubLinkWrapper>
              </SubItems>
            </SidebarNavWrapper>
            <LinkWrapper activeStore={activeStore}>
              <SidebarLink to="/store" onClick={showSiderbar}>
                store
              </SidebarLink>
            </LinkWrapper>
            <LinkWrapper activeFaqs={activeFaqs}>
              <SidebarLink to="/faqs" onClick={showSiderbar}>
                faqs
              </SidebarLink>
            </LinkWrapper>
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
