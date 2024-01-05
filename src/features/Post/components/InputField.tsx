import React, { FC, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputField.css";

type InputFieldProps = {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

const InputField: FC<InputFieldProps> = ({
  id,
  value,
  onChange,
  label,
  className,
  style,
}) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="input-field-container" style={style}>
      <TextareaAutosize
        id={id}
        value={value}
        onChange={onChange}
        className={`input-field ${className}`}
      />
      {!isScreenSmall && (
        <label htmlFor={id} className="input-field-label">
          {label}
        </label>
      )}
    </div>
  );
};

export default InputField;
