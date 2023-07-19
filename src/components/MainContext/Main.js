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
    {
      name: 'Сумка 4',
      price:'1500',
      descr:'Some descr',
      id:4,
      img:imf
    },
    {
      name: 'Сумка 5',
      price:'1000',
      descr:'Some descr',
      id:5,
      img:imf
    },
    {
      name: 'Сумка 6',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:6,
    },
    {
      name: 'Сумка 7',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:7,
      
    },

    {
      name: 'Сумка',
      price:'1500',
      descr:'Some descr',
      id:8,
      img:imf
    },
    {
      name: 'Сумка 1',
      price:'1000',
      descr:'Some descr',
      id:9,
      img:imf
    },
    {
      name: 'Сумка 3',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:10,
    },
    {
      name: 'Сумка 2',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:11,
    },
    {
      name: 'Сумка 4',
      price:'1500',
      descr:'Some descr',
      id:12,
      img:imf
    },
    {
      name: 'Сумка 5',
      price:'1000',
      descr:'Some descr',
      id:39,
      img:imf
    },
    {
      name: 'Сумка 6',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:13,
    },
    {
      name: 'Сумка 7',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:14,
    },
    {
      name: 'Сумка',
      price:'1500',
      descr:'Some descr',
      id:15,
      img:imf
    },
    {
      name: 'Сумка 1',
      price:'1000',
      descr:'Some descr',
      id:16,
      img:imf
    },
    {
      name: 'Сумка 3',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:17,
    },
    {
      name: 'Сумка 2',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:18,
    },
    {
      name: 'Сумка 4',
      price:'1500',
      descr:'Some descr',
      id:19,
      img:imf
    },
    {
      name: 'Сумка 5',
      price:'1000',
      descr:'Some descr',
      id:20,
      img:imf
    },
    {
      name: 'Сумка 6',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:21,
    },
    {
      name: 'Сумка 7',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:22,
      
    },

    {
      name: 'Сумка',
      price:'1500',
      descr:'Some descr',
      id:23,
      img:imf
    },
    {
      name: 'Сумка 1',
      price:'1000',
      descr:'Some descr',
      id:24,
      img:imf
    },
    {
      name: 'Сумка 3',
      price:'1200',
      descr:'Some descr',
      img:imf,
      id:25,
    },
    {
      name: 'Сумка 2',
      price:'1300',
      descr:'Some descr',
      img:imf,
      id:26,
    },
    {
      name: 'Сумка 4',
      price:'1500',
      descr:'Some descr',
      id:27,
      img:imf
    },
    {
      name: 'Сумка 5',
      price:'1000',
      descr:'Some descr',
      id:28,
      img:imf
    },
    
  ]
export default function Main(){
    const [show,setShow] =useState(true)
    const [cartItems, setCartItems] = useState([]);
    const [currentPage ,setCurentPage] = useState(1)
    const [postPerAge] = useState(5)
    const totallPost = product.length;
    const dataToPagination = {
      postPerAge,
      totallPost
    }
    const indexOfLAstPost = currentPage*postPerAge;
    const indexOfFirstPost = indexOfLAstPost-postPerAge
    const curPost = product.slice(indexOfFirstPost,indexOfLAstPost);

    return(
      <React.StrictMode>
      <ProductContext.Provider value={{show,setShow,cartItems,setCartItems,curPost,dataToPagination,setCurentPage}}>
        <App />
      </ProductContext.Provider>
  
    </React.StrictMode>
    )
  }