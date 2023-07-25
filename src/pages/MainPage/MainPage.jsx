import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Basket from "../Basket";

import style from "./MainPage.module.scss";
import { fetchUsers } from "../../services/Servise";
import Skeleton from "../../Ui/Skeleton";
const imgPerson =
  "https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600645/103145234-team-few-person-white-icon-with-shadow-on-transparent-background.jpg";

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.items.users);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const usersss = users[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchUsers());
    }, 2000);
    return () => {
      clearTimeout(timer);
      setShowSkeleton(false);
    };
  }, []);

  const [show, setShow] = useState(true);
  const curProducts = useSelector((state) => state.items.basket);

  const addToCart = (product) => {
    const currentProduct = {
      product,
      data: Date.now(),
    };
    dispatch({ type: "ADD_TO_BASKET", payload: currentProduct });
  };

  function showBasket(cond) {
    setShow(cond);
  }
  function createSkeleton(){
    return <Skeleton/>
  }
  return (
    <div>
      <Container>
        <div className={style.box}>
          <header className={style.box__header}>
            <div className={style.box__ofheader}>
              <div
                className={style.box__nameofCompany}
                onClick={() => dispatch(fetchUsers())}
              >
                Bags
              </div>
            </div>
          </header>
          <main>
            <div className={style.box__list}>
              {!usersss || showSkeleton ? (
                <>
                  {createSkeleton()}
                  {createSkeleton()}
                  {createSkeleton()}
                  {createSkeleton()}
                </>
              ) : (
                usersss.map((it, i) => {
                  const { name, company } = it;

                  return (
                    <div key={i} className={style.box__card}>
                      <div className={style.box__img}>
                        <img src={imgPerson} alt="img_bags" />
                      </div>
                      <div className="">{name}</div>
                      <div className=""> Company:{company.name}</div>
                      <Button
                        className={style.button41}
                        onClick={() => addToCart(it)}
                      >
                        SHOP NOW!
                      </Button>
                    </div>
                  );
                })
              )}
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
                Корзина {curProducts.length}
              </div>
            </nav>
          </div>
          <Basket showsBasket={show} />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
