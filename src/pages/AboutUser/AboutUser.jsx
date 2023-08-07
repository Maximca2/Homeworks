import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchforId } from "../../services/servise";

import style from "./aboutUser.module.scss";

const AboutUser = () => {

  const imgUser =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58xjpW6VV0nhZQpRKNjK0jCpjB1qgCmjGFw&usqp=CAU";
  const dispatch = useDispatch();
  const id = useParams();
  const curUser = useSelector((state) => state.toolkit.curentUser);
  useEffect(()=>{
      dispatch(fetchforId(id));
    
  },[])
  
  
  return (
    <div className={style.about}>
      <div className={style.box}>
        <div className={style.text}>A bit about me</div>
        <div className={style.tittle}>
          <h1>Who am i</h1>
        </div>
        {![curUser]?'загрузка даних...' : [curUser].map(
              (
                { name, username, email, address, company, phone, website },
                i
              ) => {
                return (
                  <div key={i} className={style.aboutUser}>
                    <div className={style.boxForImg}>
                      <img src={imgUser} alt="user-img" />
                      <div className={style.userInfo}>
                        <div className={style.userInfoPerson}>
                          <div className={style.name}>My name is {name}</div>
                          <div className={style.userName}>
                            My username is {username}
                          </div>
                          <div className={style.email}>My email is {email}</div>
                          <div className={style.website}>
                            My website is {website}
                          </div>
                          <div className={style.phone}>My phone is {phone}</div>
                        </div>
                        <div className={style.userInfoLive}>
                          <div className={style.city}>
                            My city is {address?.city}
                          </div>
                          <div className={style.address}>
                            My address is {address?.street}
                          </div>
                          <div className={style.suite}>
                            My suite is {address?.suite}
                          </div>
                          <div className={style.zipcode}>
                            My zipcode is {address?.zipcode}
                          </div>
                        </div>
                        <div className={style.userInfoCompany}>
                          <div className={style.companyName}>
                            My company is {company?.name}
                          </div>
                          <div className={style.catchPhrase}>
                            My company catchPhrase is {company?.catchPhrase}
                          </div>
                          <div className={style.bs}>
                            My company bs is {company?.bs}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
      </div>
    </div>
  );
};

export default AboutUser;
