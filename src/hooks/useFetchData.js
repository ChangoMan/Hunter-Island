import { useState } from "react";

function useFetchData(url) {
  const [name, setName] = useState("");

  return {
    name,
    setName
  };
}

export default useFetchData;
