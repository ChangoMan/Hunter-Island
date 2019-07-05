import React from "react";

function FormField(props) {
  return (
    <div className="form-field">
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormField;
