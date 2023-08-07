import axios from 'axios';

import { fetchUser } from '../redux/store/usersReducer'

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

