import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  const setLocalStorageValue = (newValue) => {
    setValue((prev) => {
      const valueToStore =
        typeof newValue === "function"
          ? newValue(prev)
          : newValue;

      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );

      return valueToStore;
    });
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;