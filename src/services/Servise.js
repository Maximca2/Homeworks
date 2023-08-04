import { addCustomersAction } from "../redux/store/ItemsReduce"

export const fetchUsers = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomersAction(json)))
  }
}

