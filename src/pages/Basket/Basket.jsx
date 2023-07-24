import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

import style from "./Basket.module.scss";

const Basket = (props) => {
  const dispatch = useDispatch();
  const curProducts = useSelector((state) => state.items.basket);
  const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
  const showBaskety = props.showsBasket;
  function deleteIt(id) {
    dispatch({ type: REMOVE_FROM_BASKET, payload: id });
  }
  return (
    <div>
      Корзина
      <div
        className={style.basket}
        style={
          !showBaskety
            ? {
                transition: `all ${1}s ease-out`,
                backgroundColor: `rgb${(193, 193, 240)})`,
                transform: `translate(${0}px, ${0}px)`,
              }
            : {
                transform: `translate(${-5000}px, ${0}px)`,
                transition: `all ${1}s ease-out`,
              }
        }
      >
        <div className={style.basket__list}>
          {!curProducts.length
            ? "Корзина пуста"
            : curProducts.map(({ name, img, price }, i) => {
                return (
                  <div key={i} className={style.basket__card}>
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
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
