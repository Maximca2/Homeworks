import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


import style from "./MainPage.module.scss";
const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.it);
  const curProducts = useSelector((state) => state.items.basket);
  const ADD_TO_BASKET ='ADD_TO_BASKET'
  
  const addToCart = (product) => {
    const currentProduct = {
      product,
      data: Date.now(),
    };
    dispatch({ type: ADD_TO_BASKET, payload: currentProduct });
  };
  return (
    <div>
      <Container>
        <div className={style.box}>
          <header className={style.box__header}>
            <div className={style.box__ofheader}>
              <div
                className={style.box__nameofCompany}
              >
                Bags
              </div>
            </div>
          </header>
          <main>
            <div className={style.box__list}>
            {products.map((it, i) => {
                const {name,img,price} = it;
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
              <div
                className={style.box__search}
              >
                <div className={style.baskettittle}>
                Корзина {curProducts.length}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default MainPage;