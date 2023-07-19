import React from 'react';
import { useContext } from 'react';
import ProductContext from '../../Context/Context-product';
import { Button } from 'react-bootstrap';
import style from "../MainPage/MainPage.module.scss";
const OtherProduct = ({addToCart}) => {

    const { curPost } = useContext(ProductContext);
    
    return (
        <div>
            <div className={style.box__list}>
              {curPost.map((it, i) => {
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
        </div>
    );
};

export default OtherProduct;