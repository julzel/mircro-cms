import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <RouterLink to={to}>{children}</RouterLink>
);

export default Link;
