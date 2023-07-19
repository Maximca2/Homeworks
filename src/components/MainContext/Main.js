import React,{useState} from "react";

import ProductContext from "../../Context/Context-product";
import App from "../../App";

import imf from '../../img/bag_rose.jpg' 
const product = [
    {
      name: 'Сумка',
      price:'1500',
      descr:'Some descr',
      id:0,
      img:imf
    },
    {
      name: 'Сумка 1',
      price:'1000',
      descr:'Some descr',
      id:1,
      img:imf
    },
    {
      name: 'Сумка 3',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:2,
    },
    {
      name: 'Сумка 2',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:3,
    },
  ]

export default function Main(){
    const [show,setShow] =useState(true)
    const [cartItems, setCartItems] = useState([]);
    return(
      <React.StrictMode>
      <ProductContext.Provider value={{show,setShow,cartItems,setCartItems,product}}>
        <App />
      </ProductContext.Provider>
  
    </React.StrictMode>
    )
  }