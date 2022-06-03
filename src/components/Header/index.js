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
  const { setShow, showSub, setShowSidebar } = useContext(HeaderContext);
  return (
    <IconContext.Provider value={{ color: COLORS.primary }}>
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
                <SocialLink>
                  <BsFacebook color="#3b5998" size={20} />
                </SocialLink>
                <SocialLink>
                  <BsInstagram color="#ea0c5f" size={20} />
                </SocialLink>
              </SocialWrapper>
            </Column2>
          </HeaderColumnWrapper>
        </HeaderRow1>
      </HeaderDetailsSection>

      <HeaderNavSection>
        <HeaderNavColumnWrapper>
          <ColumnNav1>
            <ImgWrapper>
              <Img src={img} alt="HK logo" />
            </ImgWrapper>
          </ColumnNav1>
          <ColumnNav2>
            <NavMenu>
              <NavItems>
                <NavLinksWrapper>
                  <NavNotLinks to="" onClick={setShow}>
                    meal kit
                  </NavNotLinks>
                  <NavIcon onClick={setShow}>
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
                  <SubNavLinks to="/home-favorites">home favories</SubNavLinks>
                  <SubNavLinks to="/chefs-choice">chef's choice</SubNavLinks>
                  <SubNavLinks to="/hot-kitchen-speciality">
                    hot kitchen speciality
                  </SubNavLinks>
                </SubItems>
              </NavItems>
              <NavItems>
                <NavLinks to="/store">store</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="/faqs">faqs</NavLinks>
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
    </IconContext.Provider>
  );
};

export default Header;
