import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

import {removeUser} from '../../redux/store/usersReducer'

import style from "./Basket.module.scss";

const Basket = ({img}) => {
  const dispatch = useDispatch();
  const curProducts = useSelector((state) => state.toolkit.basket);
  
  function deleteIt(id) {
    dispatch(removeUser(id));
  }

  return (

    <div>
      List of adding workers
      <div className={style.box}>
        <div className={style.basket}>
          <div className={style.basket__list}>
            {!curProducts.length
              ? "Корзина пуста"
              : curProducts.map(({ product }, i) => {
                  const { name, price,id} = product;
                  return (
                    <div key={i} className={style.basket__card}>
                      <img src={img} alt="curimg" />
                      {name}
                      {price}
                      <Button className={style.button41}>Купити</Button>
                      <Button
                        onClick={() => deleteIt(id)}
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
