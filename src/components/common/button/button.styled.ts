import styled, { css } from "styled-components";
import { ButtonVariant } from "./button";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 8px 16px;
          font-size: 14px;
          min-height: 36px;
        `;
      case "large":
        return css`
          padding: 16px 24px;
          font-size: 18px;
          min-height: 56px;
        `;
      default:
        return css`
          padding: 12px 20px;
          font-size: 16px;
          min-height: 44px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;

          &:hover:not(:disabled) {
            background-color: #2563eb;
            border-color: #2563eb;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          &:active:not(:disabled) {
            background-color: #1d4ed8;
            border-color: #1d4ed8;
            transform: translateY(0);
          }
        `;
      case "secondary":
        return css`
          background-color: transparent;
          color: #3b82f6;
          border-color: #3b82f6;

          &:hover:not(:disabled) {
            background-color: #f8fafc;
            border-color: #2563eb;
            color: #2563eb;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
          }

          &:active:not(:disabled) {
            background-color: #e2e8f0;
            border-color: #1d4ed8;
            color: #1d4ed8;
            transform: translateY(0);
          }
        `;
      default:
        return "";
    }
  }}

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;
