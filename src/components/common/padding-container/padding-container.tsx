import { ReactNode } from "react";
import { PaddingContainerStyled } from "./padding-container.styled";

export default function PaddingContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <PaddingContainerStyled>{children}</PaddingContainerStyled>;
}
