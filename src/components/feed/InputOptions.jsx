import React from "react";

const InputOptions = ({ title, icon, color }) => {
  return (
    <div className="inputOptions">
      <span style={{ color: color }}>{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default InputOptions;
