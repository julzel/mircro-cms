import React from "react";

import "./InputField.scss";

interface InputFieldProps {
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  onChange,
  value,
  type = "text",
  placeholder = "",
}) => (
  <input
    name={name}
    type={type}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    className="input-field"
  />
);

export default InputField;
