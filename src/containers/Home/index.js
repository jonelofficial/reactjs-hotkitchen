import React from "react";
import { Title, TitleText } from "../../global_variables/GlobalElements";
import {
  BackgroundImg,
  BgOverlay,
  ButtonHero,
  ButtonHover,
  ButtonWrapper,
  HomeContainer,
  HomeSection,
  HomeWrapper,
} from "./HomeElements";
import PickYourCravings from "./PickYourCravings";
import MealKit from "./MealKit";
import Carousel from "./Carousel";

const Home = () => {
  const imgs = [
    "https://jonelofficial.site/wp-content/uploads/2022/05/pochero-1.jpg",
    "https://jonelofficial.site/wp-content/uploads/2022/05/crispy-pata.jpg",
    "https://jonelofficial.site/wp-content/uploads/2022/05/kare-kare.jpg",
    "https://jonelofficial.site/wp-content/uploads/2022/05/tonkatsu.jpg",
  ];
  return (
    <>
      <HomeSection className="slideshow">
        {imgs.map((img, index) => (
          <BackgroundImg
            className="slideshow-image"
            key={index}
            style={{
              backgroundImage: `url("${img}")`,
            }}
          ></BackgroundImg>
        ))}
        <BgOverlay></BgOverlay>
        <HomeContainer>
          <HomeWrapper>
            <Title>hot kitchen</Title>
            <TitleText>taste of freshness at your doorteps</TitleText>
            <ButtonWrapper>
              <ButtonHero>shop now</ButtonHero>
              <ButtonHover>enjoy shopping</ButtonHover>
            </ButtonWrapper>
          </HomeWrapper>
        </HomeContainer>
      </HomeSection>

      <PickYourCravings />
      <MealKit />
      <Carousel />
    </>
  );
};

export default Home;
