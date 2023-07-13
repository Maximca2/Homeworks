import React, {useState } from 'react';
import Basket from '../Basket';
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import style from './MainPage.module.scss'
// не дефолт імп не юзати по дефолту

// правильна структура

const MainPage = (props) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.items.it)
    const [show, setShow] = useState(false)
    const curProducts = useSelector(state => state.items.basket)
    console.log('провірка на зміну')
    const addToCart = (product) => {
        const curIt = {
            product,
            data: Date.now()
        }
        dispatch({ type: 'ADD_TO_BASKET', payload: curIt })
    };

    function showBasket(cond) {
        setShow(cond)
    }

    return (
        <div>
            <Container>
                <div className={style.box}>
                    <header className={style.box__header}>
                        <div className={style.box__ofheader}>
                            <div className="">
                                {/* <img src={logo} alt="logo" /> */}
                            </div>
                            <div className={style.box__nameofCompany}>
                                Bags
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className={style.box__list}>
                            {products.map((it, i) => {
                                return <div key={i} className={style.box__card}>
                                    <div className="">
                                        <i className="fa fa-heart" style={{ fontSize: 24, textAlign: 'right', color: '#fff' }} />
                                    </div>
                                    <div className={style.box__img}>
                                        <img src={it.img} alt="img_bags" />
                                    </div>
                                    <div className="">
                                        {it.name}
                                    </div>
                                    <div className="">
                                        {it.price}
                                    </div>
                                    <Button className={style.button41} onClick={() => addToCart(it)}>
                                        SHOP NOW!
                                    </Button>
                                </div>
                            })}
                        </div>
                    </main>
                    <div className={style.box__navigation}>
                        <div className={style.box__search}>
                            Шукати
                        </div>
                        <div className={style.box__search}>
                            Подобається
                        </div>
                        <div onClick={() => showBasket(true)} className={style.box__search}>
                            Корзина {curProducts.length}
                        </div>
                    </div>
                    <Basket showsBasket={show} />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;