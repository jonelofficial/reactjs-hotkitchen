import React from "react";
import { CgCopyright } from "react-icons/cg";
import {
  FooterContainer,
  FooterSection,
  Column1,
  TitleText,
  IconDetailsWrapper,
  Icon,
  Details,
  SocialWrapper,
  SocialLink,
  FooterLinkWrapper,
  Column2,
  Column3,
  FooterLink,
  Column4Wrapper,
  Column4,
  CopyRightWrapper,
  CopyRightText,
  Wrap,
  Spacer,
} from "./FooterElements";

import {
  BsEnvelope,
  BsTelephone,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { IconContext } from "react-icons";

import { COLORS } from "../../global_variables/CSS";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: COLORS.primary }}>
      <FooterSection>
        <FooterContainer>
          <Column1>
            <TitleText>contact us</TitleText>
            <IconDetailsWrapper>
              <Icon>
                <BsEnvelope />
              </Icon>
              <Details> hotkitchen@gmail.com</Details>
            </IconDetailsWrapper>
            <IconDetailsWrapper>
              <Icon>
                <BsTelephone />
              </Icon>
              <Details> +639 123 456 789</Details>
            </IconDetailsWrapper>

            <Spacer></Spacer>
            {/*  */}

            <TitleText>stay connected</TitleText>
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
          </Column1>

          <Column2>
            <TitleText>information</TitleText>
            <FooterLinkWrapper>
              <FooterLink>Home</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Faqs</FooterLink>
            </FooterLinkWrapper>
          </Column2>

          <Column3>
            <TitleText>products</TitleText>
            <FooterLinkWrapper>
              <FooterLink>Garlic Parmesan Chicken Wings</FooterLink>
              <FooterLink>Herbed Porkchop With Potato Salad</FooterLink>
              <FooterLink>Salisbury Steak With Mashed Potato</FooterLink>
              <FooterLink>Porterhouse Steak With Fries</FooterLink>
              <FooterLink>Sinigang Na Bagnet</FooterLink>
            </FooterLinkWrapper>
          </Column3>

          <Column4>
            <Wrap>
              <TitleText>shop</TitleText>
              <FooterLinkWrapper>
                <FooterLink>Store Location</FooterLink>
                <FooterLink>Terms And Condition</FooterLink>
              </FooterLinkWrapper>
            </Wrap>
            <Column4Wrapper>
              <CopyRightWrapper>
                <CgCopyright style={{ marginTop: "1px" }} size={20} />
                <CopyRightText>
                  {new Date().getFullYear()} Hot Kitchen | All Rights Reserved
                </CopyRightText>
              </CopyRightWrapper>
            </Column4Wrapper>
          </Column4>
        </FooterContainer>
      </FooterSection>
    </IconContext.Provider>
  );
};

export default Footer;
