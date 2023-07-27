import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

import { REMOVE_FROM_BASKET } from "../../redux/store/actions";

import style from "./Basket.module.scss";

const Basket = () => {
  const dispatch = useDispatch();
  const curProducts = useSelector((state) => state.items.basket);

  function deleteIt(id) {
    dispatch({ type: REMOVE_FROM_BASKET, payload: id });
  }
  return (
    <div>
      Корзина
      <div className={style.box}>
        <div className={style.basket}>
          <div className={style.basket__list}>
            {!curProducts.length
              ? "Корзина пуста"
              : curProducts.map(({ product }, i) => {
                  const { name, price, img } = product;
                  return (
                    <div key={i} className={style.basket__card}>
                      <img src={img} alt="curimg" />
                      {name}
                      {price}
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
    </div>
  );
};

export default Basket;
