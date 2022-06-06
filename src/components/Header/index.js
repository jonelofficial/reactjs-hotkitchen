import React, { useContext, useState } from "react";
import {
  Column1,
  Column2,
  ContactWrapper,
  Details,
  HeaderColumnWrapper,
  HeaderRow1,
  HeaderDetailsSection,
  Icon,
  IconDetailsWrapper,
  SocialLink,
  SocialWrapper,
  HeaderNavSection,
  HeaderNavColumnWrapper,
  ColumnNav1,
  ImgWrapper,
  Img,
  ColumnNav2,
  NavMenu,
  NavItems,
  NavLinks,
  SubItems,
  NavIcon,
  NavLinksWrapper,
  SubNavLinks,
  NavNotLinks,
  HamMenu,
  MenuIconWrapper,
  SubLinkWrapper,
  HeaderWrapper,
} from "./HeaderElements";

import {
  BsEnvelope,
  BsTelephone,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";
import { COLORS } from "../../global_variables/CSS";
import { HeaderContext } from "../../global_variables/NavContext";

const Header = () => {
  const img = require("../../images/HK-logo.png");
  const {
    setShow,
    showSub,
    setShowSidebar,
    setShowSub,
    activeStore,
    activeFaqs,
    activeHome,
    activeChefs,
    activeHot,
  } = useContext(HeaderContext);
  return (
    <IconContext.Provider value={{ color: COLORS.primary }}>
      <HeaderWrapper>
        <HeaderDetailsSection>
          <HeaderRow1>
            <HeaderColumnWrapper>
              <Column1>
                <ContactWrapper>
                  <IconDetailsWrapper>
                    <Icon>
                      <BsEnvelope />
                    </Icon>
                    <Details>hotkitchen@gmail.com</Details>
                  </IconDetailsWrapper>
                  <IconDetailsWrapper>
                    <Icon>
                      <BsTelephone />
                    </Icon>
                    <Details>+639 123 456 789</Details>
                  </IconDetailsWrapper>
                </ContactWrapper>
              </Column1>
              <Column2>
                <SocialWrapper>
                  <SocialLink
                    href="https://www.facebook.com/hotkitchenph"
                    target="_blank"
                    style={{ background: "#3b5998" }}
                  >
                    <BsFacebook color="#fff" size={15} />
                  </SocialLink>
                  <SocialLink
                    href="https://www.instagram.com/hotkitchenph/"
                    target="_blank"
                    style={{ background: "#ea0c5f" }}
                  >
                    <BsInstagram color="#fff" size={15} />
                  </SocialLink>
                </SocialWrapper>
              </Column2>
            </HeaderColumnWrapper>
          </HeaderRow1>
        </HeaderDetailsSection>

        <HeaderNavSection>
          <HeaderNavColumnWrapper>
            <ColumnNav1>
              <ImgWrapper to="/">
                <Img src={img} alt="HK logo" />
              </ImgWrapper>
            </ColumnNav1>
            <ColumnNav2>
              <NavMenu>
                <NavItems
                  showSub={showSub}
                  onMouseEnter={() => setShowSub(true)}
                  onMouseLeave={() => setShowSub(false)}
                >
                  <NavLinksWrapper onClick={setShow}>
                    <NavNotLinks to="">meal kit</NavNotLinks>
                    <NavIcon>
                      <IoIosArrowDown
                        color="#fff"
                        style={{
                          transform: showSub ? "rotate(-180deg)" : "rotate(0)",
                          transition: "all .2s ease-in-out",
                        }}
                      />
                    </NavIcon>
                  </NavLinksWrapper>
                  <SubItems showSub={showSub}>
                    <SubLinkWrapper activeHome={activeHome}>
                      <SubNavLinks
                        to="/home-favorites"
                        onClick={() => setShowSub(false)}
                      >
                        home favorites
                      </SubNavLinks>
                    </SubLinkWrapper>
                    <SubLinkWrapper activeChefs={activeChefs}>
                      <SubNavLinks
                        to="/chefs-choice"
                        onClick={() => setShowSub(false)}
                      >
                        chef's choice
                      </SubNavLinks>
                    </SubLinkWrapper>

                    <SubLinkWrapper activeHot={activeHot}>
                      <SubNavLinks
                        to="/hot-kitchen-speciality"
                        onClick={() => setShowSub(false)}
                      >
                        hot kitchen speciality
                      </SubNavLinks>
                    </SubLinkWrapper>
                  </SubItems>
                </NavItems>
                <NavItems activeStore={activeStore}>
                  <NavLinks to="/store" onClick={() => setShowSub(false)}>
                    store
                  </NavLinks>
                </NavItems>
                <NavItems activeFaqs={activeFaqs}>
                  <NavLinks to="/faqs" onClick={() => setShowSub(false)}>
                    faqs
                  </NavLinks>
                </NavItems>
              </NavMenu>
            </ColumnNav2>
            <HamMenu>
              <MenuIconWrapper onClick={setShowSidebar}>
                <HiMenuAlt3 size={35} />
              </MenuIconWrapper>
            </HamMenu>
          </HeaderNavColumnWrapper>
        </HeaderNavSection>
      </HeaderWrapper>
    </IconContext.Provider>
  );
};

export default Header;
