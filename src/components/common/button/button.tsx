import { StyledButton } from "./button.styled";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  size = "medium",
  children,
  onClick,
  type = "button",
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
