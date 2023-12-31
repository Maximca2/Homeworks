import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCurrentUserforId } from "../../services/servise";

import LeafletMap from "../ReactLeafletMap/LeafletMap";

import style from "./aboutUser.module.scss";

const defaultCord = {lat :51.505,lng:-0.09}

const imgUser =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58xjpW6VV0nhZQpRKNjK0jCpjB1qgCmjGFw&usqp=CAU";

const AboutUser = () => {
  const [arrofCord,setarrofCord] = useState(defaultCord)

  const dispatch = useDispatch();
  const { userId } = useParams();

  const curUser = useSelector((state) => state.toolkit.curentUser);

  useEffect(() => {
    dispatch(fetchCurrentUserforId(userId));
  }, [dispatch, userId]);

  const { name, username, email, address, company, phone, website } = curUser;
  
  useEffect(()=>{
    setarrofCord(address?.geo ?? defaultCord)
    
  },[address])
  
  return (
    <div className={style.about}>
      <div className={style.box}>
        <div className={style.text}>A bit about me</div>
        <div className={style.tittle}>
          <h1>Who am i</h1>
        </div>
        <div className={style.aboutUser}>
          <div className={style.boxForImg}>
            <img src={imgUser} alt="user-img" />
            <div className={style.userInfo}>
              <div className={style.userInfoPerson}>
                <div className={style.name}>My name is {name}</div>
                <div className={style.userName}>My username is {username}</div>
                <div className={style.email}>My email is {email}</div>
                <div className={style.website}>My website is {website}</div>
                <div className={style.phone}>My phone is {phone}</div>
              </div>
              <div className={style.userInfoLive}>
                <div className={style.city}>My city is {address?.city}</div>
                <div className={style.address}>
                  My address is {address?.street}
                </div>
                <div className={style.suite}>My suite is {address?.suite}</div>
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
                <div className={style.bs}>My company bs is {company?.bs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeafletMap  cordinates={arrofCord} name={name}/>
    </div>
  );
};

export default AboutUser;
