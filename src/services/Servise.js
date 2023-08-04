import axios from 'axios';

import { userApi } from "../api/api"

import { addCustomersAction } from "../redux/store/ItemsReduce"

export const fetchUsers = () => {

  return function (dispatch) {
  axios.get(userApi)

  .then(({data})=>dispatch(addCustomersAction(data)))

  .catch(function (error) {
    console.log(error);
  })
  }

}

