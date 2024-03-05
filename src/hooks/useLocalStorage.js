import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(storedValue || initialValue);

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
