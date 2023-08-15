import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import { fetchUsers } from "../../services/servise";
import { addUser } from "../../redux/store/usersReducer";
import { ROUTE_TO_ABOUT_USER } from "../../routes/routes";

import SkeletonForMainpageCards from "../../components/Skeletons/SkeletonMainPageCards/SkeletonForMainpageCards";
import Basket from "../Basket";

import style from "./MainPage.module.scss";

const imgPerson =
  "https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600645/103145234-team-few-person-white-icon-with-shadow-on-transparent-background.jpg";

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.toolkit.users)[0];
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [show, setShow] = useState(true);

  const curProducts = useSelector((state) => state.toolkit.basket);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchUsers());
    }, 2000);
    return () => {
      clearTimeout(timer);
      setShowSkeleton(false);
    };
  }, [dispatch]);

  const addToCart = (product, i) => {
    const currentProduct = {
      product,
      data: Date.now(),
    };
    dispatch(addUser(currentProduct));
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
              {!users || showSkeleton ? (
                <>
                  <SkeletonForMainpageCards cardsLength={4} />
                </>
              ) : (
                users.map((it, i) => {
                  const { name, company, id,} = it;
                  return (
                    <div key={i} className={style.box__card}>
                      <div className={style.box__img}>
                        <img src={imgPerson} alt="img_bags" />
                      </div>
                      <div className="">{name}</div>
                      <div className=""> Company:{company.name}</div>

                      <Button
                        className={style.button41}
                        onClick={() => addToCart(it, i)}
                      >
                        Add to Project
                      </Button>

                      <NavLink
                        to={`${ROUTE_TO_ABOUT_USER}${id}`}
                        className={style.button_LearnMore}
                        style={({ isActive }) => {
                          return isActive ? { background: "#FFB4EA" } : {};
                        }}
                      >
                        Learn more
                      </NavLink>
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
                List of workers on Project {curProducts.length}
              </div>
            </nav>
          </div>
          <Basket showsBasket={show} img={imgPerson} />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
