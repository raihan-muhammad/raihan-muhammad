"use client";
import Link from "next/link";
import { NavbarStyled, WrapperMenu } from "./navbar.styled";
import PaddingContainer from "../padding-container/padding-container";
import { Button } from "../button/button";

export default function Navbar() {
  return (
    <PaddingContainer>
      <NavbarStyled>
        <h1>Raihan</h1>
        <WrapperMenu>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About Me</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
        </WrapperMenu>

        <Button variant="secondary">Book a call</Button>
      </NavbarStyled>
    </PaddingContainer>
  );
}
