import { SHOW_ALERT, HIDE_ALERT } from './../actions/actionTypes';

const initialState = {
  show: false,
  text: 'Test text'
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        ...state,
        show: true,
        text: action.payload
      }
    }
    case HIDE_ALERT: {
      return {
        ...state,
        show: false
      }
    }
    default: 
      return state
  }
}

export default alertReducer