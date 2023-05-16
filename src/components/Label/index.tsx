import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

export default Label;
