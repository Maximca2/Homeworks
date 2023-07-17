import React, { useState } from "react";
import { Routes, NavLink, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../Basket";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from "./MainPage.module.scss";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.it);
  const [show, setShow] = useState(true);
  const curProducts = useSelector((state) => state.items.basket);
  
  const addToCart = (product) => {
    const curIt = {
      product,
      data: Date.now(),
    };
    dispatch({ type: "ADD_TO_BASKET", payload: curIt });
  };

  function showBasket(cond) {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(show));
    setShow(cond);
  }
  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    console.log("data", data);

    if (data !== null) setShow(JSON.parse(data));
  }, []);
  function clearHistory() {
    window.localStorage.clear();
  }

  return (
    <div>
      <Container>
        <div className={style.box}>
          <header className={style.box__header}>
            <div className={style.box__ofheader}>
              <div
                className={style.box__nameofCompany}
                onClick={() => clearHistory()}
              >
                Bags
              </div>
            </div>
          </header>
          <main>
            <div className={style.box__list}>
              {products.map((it, i) => {
                return (
                  <div key={i} className={style.box__card}>
                    <div className="">
                      <i
                        className="fa fa-heart"
                        style={{
                          fontSize: 24,
                          textAlign: "right",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div className={style.box__img}>
                      <img src={it.img} alt="img_bags" />
                    </div>
                    <div className="">{it.name}</div>
                    <div className="">{it.price}</div>
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
                onClick={() => showBasket(false)}
                className={style.box__search}
              >
                <NavLink className={style.box__link} to="/basket">
                  Корзина {curProducts.length}
                </NavLink>
              </div>
            </nav>
          </div>
          <Routes>
            <Route path="/basket" element={<Basket showsBasket={show} />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
