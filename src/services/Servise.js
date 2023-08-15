import axios from 'axios';

import { fetchUser } from '../redux/store/usersReducer'
import { fetchUserId } from '../redux/store/usersReducer';

export const fetchUsers = () => {

  return function (dispatch) {

    axios.get(`${process.env.REACT_APP_API}/users`)
      .then(({ data }) =>
        dispatch(fetchUser(data)))

      .catch(function (error) {
        console.error(error)
      })
  }

}
//FetchUserForId
export const fetchCurrentUserforId = (id) => {
    
  return function (dispatch) {

    axios.get(`${process.env.REACT_APP_API}/users/${id}`)
      .then(({ data }) =>
        dispatch(fetchUserId(data)))

      .catch(function (error) {
        console.error(error)
      })
  }
  

}