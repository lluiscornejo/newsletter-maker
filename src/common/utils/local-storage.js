import { localStorageKey } from '@Config/variables';

export const setLocalStorage = (data) => localStorage.setItem(localStorageKey, JSON.stringify(data));

export const getLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey));

export const removeLocalStorage = () => localStorage.removeItem(localStorageKey);
