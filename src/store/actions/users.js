import axios from "axios"
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING, SET_SEARCH_TEXT } from "./actionTypes"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export function search(value) {
  return async dispatch => {
    dispatch(setLoading())
    
    try {
      const response = await axios.get(
        withCreds(`https://api.github.com/search/users?q=${value}&`)
      )
      dispatch(searchUsersSuccess(response.data.items))
    } catch (e) {
      console.log(e)
    }
  
  }
}

export function getUser(name){
  return async dispatch => {
    dispatch(setLoading())

    try {
      const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}?`)
      )
    
      dispatch(getUserSuccess(response.data)) 
    } catch (e) {
      console.log(e)
    }
  }
}

export function getRepos(name) {
  return async dispatch => {
    dispatch(setLoading())

    try {
      const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
      )
      
      dispatch(getReposSuccess(response.data))
      
    } catch (e) {
      console.log(e)
    }
  }
}

export function clearUsers() {
  return dispatch => {
    dispatch(clearUsersSuccess())
  }
}

export function setSearchText(text) {
  return dispatch => {
    dispatch(setSearchTextSuccess(text))
  }
}

function setLoading() {
  return dispatch => {
    dispatch(setLoadingSuccess())
  }
}

function searchUsersSuccess(users) {
  return {
    type: SEARCH_USERS,
    payload: users
  }
}

function getUserSuccess(name) {
  return {
    type: GET_USER,
    payload: name
  }
}

function getReposSuccess(name) {
  return {
    type: GET_REPOS,
    payload: name
  }
}

function clearUsersSuccess() {
  return {
    type: CLEAR_USERS
  }
}

function setLoadingSuccess() {
  return {
    type: SET_LOADING
  }
}

function setSearchTextSuccess(text) {
  return {
    type: SET_SEARCH_TEXT,
    text
  }
}