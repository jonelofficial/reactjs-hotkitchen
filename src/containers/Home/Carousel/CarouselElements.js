import styled from "styled-components";

export const CarouselSection = styled.section`
  padding: 10px;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const CarouselContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
`;
export const TitleText = styled.h2`
  text-align: center;
  max-width: 1100px;
  margin: 26px auto;
  font-size: 26px;
  font-weight: 500;
`;
export const Img = styled.img`
  height: auto;
  width: 100%;
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
`;
