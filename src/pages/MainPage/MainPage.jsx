import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Basket from "../Basket";
import ProductContext from "../../Context/Context-product";

import style from "./MainPage.module.scss";


const MainPage = () => {
  const { product } = useContext(ProductContext);
  const { setShow } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(ProductContext);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  function showBasket(cond) {
    setShow(cond);
  }
  return (
    <div>
      <Container>
        <div className={style.box}>
          <header className={style.box__header}>
            <div className={style.box__ofheader}>
              <div className={style.box__nameofCompany}>Bags</div>
            </div>
          </header>
          <main>
            <div className={style.box__list}>
              {product.map((it, i) => {
                const { name, img, price } = it;
                return (
                  <div key={i} className={style.box__card}>
                    <div className={style.box__img}>
                      <img src={img} alt="img_bags" />
                    </div>
                    <div className="">{name}</div>
                    <div className="">{price}</div>
                    <Button
                      className={style.button41}
                      onClick={() => addToCart(it)}
                    >
                      SHOP NOW!
                    </Button>
                  </div>
                );
              })}
            </div>
          </main>
          <div className={style.box__navigation}>
            <nav>
              <div className={style.box__search}>Шукати</div>
              <div className={style.box__search}>Подобається</div>
              className={style.box__search}
              <div
                onClick={() => showBasket(false)}
                className={style.box__link}
              >
                Корзина
              </div>
            </nav>
          </div>
          <Basket products={cartItems} />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
