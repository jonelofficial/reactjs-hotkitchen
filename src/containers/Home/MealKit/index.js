import React from "react";
import {
  Column1,
  Column2,
  Img,
  ImgWrapper,
  MealkitContainer,
  MealkitInnerSection,
  MealkitSection,
  SubText,
  TitleText,
  Wrapper,
} from "./MealKitElements";

const MealKit = () => {
  const img = require("../../../images/home/mealkit/Banner Photo_Meal Kits.jpg");
  return (
    <MealkitSection>
      <MealkitContainer>
        <MealkitInnerSection>
          <Column1>
            <Wrapper>
              <TitleText>WHAT IS A MEAL KIT?</TitleText>
              <SubText>
                “Our Hot Kitchen Meal Kits consists of pre-portioned ingredients
                to make your chosen recipe. All ingredients are freshly sourced
                and prepared before delivery to make sure only the freshest
                meats and produce arrive at your doorstep.”
              </SubText>
            </Wrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} />
            </ImgWrapper>
          </Column2>
        </MealkitInnerSection>
      </MealkitContainer>
    </MealkitSection>
  );
};

export default MealKit;
