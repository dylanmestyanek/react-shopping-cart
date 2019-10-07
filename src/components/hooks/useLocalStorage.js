import React, { useState } from "react" 

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);

        item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];
};