import Link from "next/link";
import { NavbarStyled } from "./navbar.styled";

export default function Navbar() {
  return (
    <NavbarStyled>
      <h1>Raihan</h1>
      <ul>
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
      </ul>

      <button>Book a call</button>
    </NavbarStyled>
  );
}
