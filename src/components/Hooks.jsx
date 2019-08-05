import React, { useState } from "react";
import useFetchData from '../hooks/useFetchData'

function Hooks(props) {
  const [firstName, setFirstName] = useFetchData('repo');
  return (
    <div>
      <p>{firstName}</p>
      <input
        type="text"
        value={firstName}
        onChange={e => {
          setFirstName(e.target.value);
        }}
      />
    </div>
  );
}

export default Hooks;
