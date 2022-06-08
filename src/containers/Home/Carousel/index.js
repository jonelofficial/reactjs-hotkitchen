import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  CarouselContainer,
  CarouselSection,
  Img,
  ImgBox,
  TitleText,
} from "./CarouselElements";

const Carousel = () => {
  const carouselImages = [
    "Beef Bulalo_800x544 pixels_-min.jpg",
    "Beef Burger with Blue Cheese Aioli and Onion Jam_800x544 pixels_-min.jpg",
    "Beef Caldereta_800x544 pixels_-min.jpg",
    "Garlic Parmesan Chicken Wings_800x544 pixels_-min.jpg",
    "Ginataang Manok_800x544 pixels_-min.jpg",
    "Herbed Pork Chop with Potato Salad_800x544 pixels_-min.jpg",
    "Honey Soy Pepper Glazed Crispy Pata_800x544 pixels_-min.jpg",
    "Hungarian Linguine Pasta_800x544 pixels_-min.jpg",
    "Lemon Chicken Pepper with Rice Pilaf_800x544 pixels_-min.jpg",
    "Pork Sinigang_800x544 pixels_-min.jpg",
    "Pork Steak in Tarragon Cream Sauce_800x544 pixels_-min.jpg",
    "Porterhouse Steak with Fries_800x544 pixels_-min.jpg",
    "Roasted Filipino Style Chicken_800x544 pixels_-min.jpg",
    "Salisbury Steak_800x544 pixels_-min.jpg",
    "Sinigang Bagnet_800x544 pixels_-min.jpg",
    "Special Pork Adobo_800x544 pixels_-min.jpg",
    "Tinolang Native Manok_800x544 pixels_-min.jpg",
  ];

  return (
    <CarouselSection>
      <TitleText>@hotkitchenph on instagram</TitleText>
      <CarouselContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {carouselImages.map((img, index) => (
            <SwiperSlide key={index}>
              <ImgBox className="img">
                <Img src={require(`../../../images/home/carousel/${img}`)} />
              </ImgBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </CarouselSection>
  );
};

export default Carousel;
