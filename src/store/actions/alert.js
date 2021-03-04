import { HIDE_ALERT, SHOW_ALERT } from "./actionTypes"

export function hide() {
  return dispatch => {
    dispatch(setHide())
  }
}

export function show(text) {
  return dispatch => {
    dispatch(setShow(text))
  }
}

const setHide = () => ({type: HIDE_ALERT})
const setShow = (text) => ({type: SHOW_ALERT, payload: text})