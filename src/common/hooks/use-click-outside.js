import { useEffect } from 'react';

/**
 * Click outside executes a function
 * @param elementsRefListExcluded: array of elements ref to exclude
 * @param callBack: function to execute
 */
export const useClickOutside = (elementsRefListExcluded, callBack) => {
  useEffect(() => {
    const handlerClick = (event) => {
      const isInside = elementsRefListExcluded.some((elementRefExcluded) => elementRefExcluded?.current?.contains(event.target));
      if (!isInside) {
        callBack();
      }
    };
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, []);
};
