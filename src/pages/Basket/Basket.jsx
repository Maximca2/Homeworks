import React, { useContext } from "react";
import clsx from "clsx";
import Button from "react-bootstrap/esm/Button";

import ProductContext from "../../Context/Context-product";

import style from "./Basket.module.scss";

const Basket = (props) => {

  const { show } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(ProductContext);

  const Products = props.products


  console.log(Products);
  function deleteIt(id) {
    const data = cartItems.filter((it) => it.id !== id);
    setCartItems(data)
    
  }
  const showBasketClass = clsx({
    [style.basket]: true,
    [style.active]: !show,
    [style.notactive]: show,
  });

  return (
    <div>
      Корзина  {Products.length}
      <div className={showBasketClass}>
        <div className={style.basket__list}>
          {!cartItems.length
            ? "Корзина пуста"
            : cartItems.map(({ name, img, price }, i) => {
               return <div key={i} className={style.basket__card}>
                  <div className="">
                    <img src={img} alt="curimg" />
                  </div>
                  {name}
                  <div className="">{price}</div>
                  <Button className={style.button41}>Купити</Button>
                  <Button
                    onClick={() => deleteIt(i)}
                    className={style.button42}
                  >
                    Видалити
                  </Button>
                </div>;
              })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
