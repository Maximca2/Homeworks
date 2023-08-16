import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import { fetchUsers } from "../../services/servise";
import { addUser,addUserandRemove} from "../../redux/store/usersReducer";
import { ROUTE_TO_ABOUT_USER } from "../../routes/routes";

import SkeletonForMainpageCards from "../../components/Skeletons/SkeletonMainPageCards/SkeletonForMainpageCards";
import Basket from "../Basket";

import style from "./MainPage.module.scss";

const imgPerson =
  "https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600645/103145234-team-few-person-white-icon-with-shadow-on-transparent-background.jpg";

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.toolkit.users)[0];
  const favorites = useSelector((state) => state.toolkit.basket);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [show, setShow] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [additionStatetoUsers, setadditionStatetoUsers] = useState(users);
  
  
  console.log(additionStatetoUsers)
  useEffect(()=>{
    if(!inputValue){
      setadditionStatetoUsers(users)
    }

  },[inputValue])
  useEffect(()=>{
    if(users){
      setadditionStatetoUsers(users)
    }
  },[users])
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

    // const products = [...additionStatetoUsers];
    //  products[i].changeText = false?products[i].changeText = true:products[i].changeText = false


    //  console.log(products[i].changeText = true)
    
    const currentProduct = {
      product,
      i,
      data: Date.now(),
    };
    dispatch(addUserandRemove(currentProduct))
    dispatch(addUser(currentProduct));
    
  };

  function showBasket(cond) {
    setShow(cond);
  }
  const FilterData = (event) => {
    const str = event.target.value;
    const ourArrforfilterUser = [];
    setInputValue(str);

    if (users) {
      for (let index = 0; index < users.length; index++) {
        const userObj = users[index];
        const address = Object.values(userObj.address);
        const company = Object.values(userObj.company);
        const allValue = Object.values(userObj).concat(company).concat(address);

        if (allValue.includes(str)) {
          ourArrforfilterUser.push(userObj);
        }
        setadditionStatetoUsers(ourArrforfilterUser);
      }
      
    }
  };
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
              <div className={style.input__box}>
                <label>
                  Input Value:
                  <input type="text" value={inputValue} onChange={FilterData} />
                </label>
                <p>Input Value: {inputValue}</p>
              </div> 
              {!additionStatetoUsers || showSkeleton ? (
                <>
                  <SkeletonForMainpageCards cardsLength={4} />
                </>
              ) : (additionStatetoUsers.map((it, i) => {
                  const { name, company, id ,changeText} = it;
                  const isFavorite = favorites.find(({product}) => product.id === id)
                  

                  console.log({it, favorites});
                  
                  return (
                    <div key={i}  className={style.box__card}>
                      <div className={style.box__img}>
                        <img src={imgPerson} alt="img_bags" />
                      </div>
                      <div >{name}</div>
                      <div > Company:{company.name}</div>

                      <Button
                        className={style.button41}
                        onClick={!changeText?() => addToCart(it,i):console.log(it)}
                      >
                        {isFavorite?'Remove from project':'Add to Project'} 
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
                List of workers on Project {favorites.length}
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
