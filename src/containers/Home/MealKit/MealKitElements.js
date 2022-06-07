import styled from "styled-components";

export const MealkitSection = styled.section`
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const MealkitContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 500px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;
export const MealkitInnerSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 10px;
`;
export const Column2 = styled.div`
  /* padding: 10px; */
`;
export const Wrapper = styled.div``;
export const TitleText = styled.h2`
  margin-bottom: 16px;
  color: #000;
  font-size: 26px;
  font-weight: 500;
`;
export const SubText = styled.p`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.5em;
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  padding: 10px;
  height: 310px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;
