import React from "react";

import "./TextArea.scss";

interface TextAreaProps {
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  onChange,
  value,
  placeholder = "",
}) => (
  <textarea
    name={name}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    className="text-area"
  />
);

export default TextArea;
