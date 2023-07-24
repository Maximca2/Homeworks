
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
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

  const showBasketClass = clsx({
    [style.basket]: true,
    [style.active]: !showBaskety,
    [style.notactive]: showBaskety,
  });
  return (
    <div>
      Корзина
      <div
        className={showBasketClass}
      >
        <div className={style.basket__list}>
          {!curProducts.length
            ? "Корзина пуста"
            : curProducts.map((it, i) => {
                const {name,img,price} = it.product;
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

