import React, { useContext} from "react";
import Container from "react-bootstrap/Container";

import Basket from "../Basket";
import ProductContext from "../../Context/Context-product";
import OtherProduct from "../Otherproduct/OtherProduct";
import Pagination from "../../components/Pagination/Pagination";

import style from "./MainPage.module.scss";
const MainPage = () => {
  const { setShow } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(ProductContext);
  const { setCurentPage } = useContext(ProductContext);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  function showBasket(cond) {
    setShow(cond);
  }
  function paginate(number) {
    setCurentPage(number);
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
              <OtherProduct addToCart={addToCart} />
              <nav>
                <Pagination paginate={paginate}/>
              </nav>
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
