import React from "react";

import { useContext } from "react";
import ProductContext from "../../Context/Context-product";
import style from "../Pagination/Pagination.module.scss";
const Pagination = ({ paginate }) => {
  const { dataToPagination } = useContext(ProductContext);

  const { postPerAge, totallPost } = dataToPagination;
  const PageNumbers = [];
  for (let i = 1; i < Math.ceil(totallPost / postPerAge); i++) {
    PageNumbers.push(i);
  }
  
  return (
    <div>
      {PageNumbers.map((number, i) => {
        return (
          
            <li className={style.links}  onClick={() => paginate(number)} key={i} >
              {number}
            </li>
          
        );
      })}
    </div>
  );
};

export default Pagination;
