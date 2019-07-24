import React from 'react';

function FormField(props) {
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p style={{ color: 'red' }}>Field required. Please enter a value.</p>
    );
  }

  return (
    <div className="form-field">
      <label>{props.label}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {errorMessage}
    </div>
  );
}

export default FormField;
