import React from "react";

import "./Button.scss";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  type,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`button${variant === "secondary" ? " secondary" : ""}`}
  >
    {children}
  </button>
);

export default Button;
