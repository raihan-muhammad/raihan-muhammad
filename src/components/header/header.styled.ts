import styled from "styled-components";
import BgHeader from "@/assets/header/bg-header.svg";
import Image from "next/image";

export const HeaderStyled = styled.header`
  background-image: url(${BgHeader.src});
  height: 80vh;
  background-size: cover;
  position: relative;
  padding-top: 90px;
  text-align: center;

  .title-name {
    font-size: 120px;
    color: #fff;

    span {
      color: #9eff00;
    }
  }

  .title-job {
    font-size: 120px;
    -webkit-text-stroke: 2px #afb0b6;
    color: transparent;
    margin-top: -10px;
    position: relative;
  }
`;

export const LabelGreeting = styled.span`
  padding: 8px 24px;
  border-radius: 42px;
  height: 46px;
  background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, 0.12));
  border: 1px solid #262626;
  color: #e6e6e6;
  font-size: 20px;
`;

export const WrapperLabel = styled.section`
  position: relative;
  width: 200px;
  margin: auto;
`;

export const BgBlurStyled = styled(Image)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -9;
`;

export const QuoteImage = styled(Image)`
  position: absolute;
  top: -30px;
  right: -15px;
`;

export const StarIconWrapper = styled(Image)`
  position: absolute;
  right: 230px;
  top: 20px;
`;
