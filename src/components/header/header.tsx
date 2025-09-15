"use client";
import { Gantari } from "next/font/google";
import PaddingContainer from "../common/padding-container/padding-container";
import {
  HeaderStyled,
  BgBlurStyled,
  LabelGreeting,
  QuoteImage,
  WrapperLabel,
  StarIconWrapper,
} from "./header.styled";
import BgBlur from "@/assets/header/gradient-bg.svg";
import QuoteImg from "@/assets/header/quote.svg";
import StarIcon from "@/assets/header/star-icon.svg";

const GantariSans = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <PaddingContainer>
      <HeaderStyled>
        <WrapperLabel>
          <QuoteImage src={QuoteImg} alt="Quote" />
          <LabelGreeting>🖐️ Hello there!</LabelGreeting>
        </WrapperLabel>
        <h1 className={`${GantariSans.className} title-name`}>
          I’m <span>Raihan</span>,
        </h1>
        <h1 className="title-job">
          Software Engineer
          <StarIconWrapper src={StarIcon} alt="star icon" />
        </h1>

        <BgBlurStyled src={BgBlur} alt="bg blur" />
      </HeaderStyled>
    </PaddingContainer>
  );
}
