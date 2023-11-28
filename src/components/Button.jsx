import React from "react";

const Button = ({
  bgColor,
  icon = null,
  label = "",
  labelColor,
  onClick = () => {},
}) => {
  return (
    <button
      className="flex flex-row items-center font-bold py-2 px-5 rounded-md"
      style={{
        backgroundColor: bgColor,
        color: labelColor,
      }}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label && <p className="text-xs">{label}</p>}
    </button>
  );
};

export default Button;
