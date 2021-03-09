import { GET_USER, SET_LOADING, SEARCH_USERS, GET_REPOS, CLEAR_USERS, SET_SEARCH_TEXT } from '../actions/actionTypes';

const initialState = {
  user: {},
  users: [],
  loading: false,
  repos: [],
  text: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        text: action.payload
      }
    }
    case SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case GET_USER: 
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case SET_LOADING: 
      return {
        ...state,
        loading: true
      }
    case CLEAR_USERS:
      return {
        ...state,
        user: []
      }
    default: 
      return state
  }
}

export default usersReducer