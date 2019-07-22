import React from "react";

function FormField(props) {
  return (
    <div className="form-field">
      <label>{props.label}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormField;
