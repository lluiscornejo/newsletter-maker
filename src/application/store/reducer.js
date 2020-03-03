import { createReducer } from '@Common/utils/store';
import { setLocalStorage } from '@Common/utils/local-storage';

export const actionTypes = {
  LANGUAGE: 'language',
  IS_LOADED: 'isLoaded',
  IS_HOME_SCROLLED: 'isHomeScrolled',
  COLOR: 'color',
  HOME_PROJECT_SELECTED: 'homeProjectSelected',
  ELEVATOR: 'elevator',
};

export const initialState = {
  language: 'es-ES',
  isLoaded: false,
  isHomeScrolled: false,
  color: null,
  homeProjectSelected: { color: 'transparent', cover: null },
  elevator: { color: 'transparent', state: null },
};

const setData = (data) => {
  setLocalStorage(data);
  return data;
};

export const reducers = {
  [actionTypes.LANGUAGE]: (state, action) => setData({ ...state, language: action.payload }),
  [actionTypes.IS_LOADED]: (state, action) => ({ ...state, isLoaded: action.payload }),
  [actionTypes.IS_HOME_SCROLLED]: (state, action) => ({ ...state, isHomeScrolled: action.payload }),
  [actionTypes.COLOR]: (state, action) => ({ ...state, color: action.payload }),
  [actionTypes.HOME_PROJECT_SELECTED]: (state, action) => ({ ...state, homeProjectSelected: action.payload }),
  [actionTypes.ELEVATOR]: (state, action) => ({ ...state, elevator: action.payload }),
};

export const reducer = createReducer(reducers);
