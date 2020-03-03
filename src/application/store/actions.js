import { actionTypes } from '@Application/store/reducer';

export const setLanguage = (dispatch, payload) => dispatch({ type: actionTypes.LANGUAGE, payload });

export const setLoaded = (dispatch, payload) => dispatch({ type: actionTypes.IS_LOADED, payload });

export const setHomeScrolled = (dispatch, payload) => dispatch({ type: actionTypes.IS_HOME_SCROLLED, payload });

export const setColor = (dispatch, payload) => dispatch({ type: actionTypes.COLOR, payload });

export const setHomeProjectSelected = (dispatch, payload) => dispatch({ type: actionTypes.HOME_PROJECT_SELECTED, payload });

export const setElevator = (dispatch, payload) => dispatch({ type: actionTypes.ELEVATOR, payload });
