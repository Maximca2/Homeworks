import axios from 'axios';

import { addCustomersAction } from "../redux/store/ItemsReduce"

export const fetchUsers = () => {
  
  return function (dispatch) {

  axios.get(`${process.env.REACT_APP_API}/users`)

  .then(({data})=>dispatch(addCustomersAction(data)))

  .catch(function (error) {
    console.error(error)
  })
  }

}

