import React from "react";

import "./TextBlock.scss";

interface TextBlockProps {
  children: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({ children }) => (
  <p className="text-block">{children}</p>
);

export default TextBlock;
