import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchforId } from "../../services/servise";

import style from "./aboutUser.module.scss";

const AboutUser = () => {

  const dispatch = useDispatch();
  const id = useParams();
  const curUser = useSelector((state) => state.toolkit.curentUser);
  const arr = [curUser] 
  useEffect(() => {
    dispatch(fetchforId(id));
  }, []);
  return (
    <div className={style.about}>
      <div className={style.box}>
        <div className={style.text}>A bit about me</div>
        <div className={style.tittle}>
          <h1>Who am i</h1>
        </div>
        {arr.map((it,i)=>{
            return <div key={i} className={style.name}>
            <h2> {it.name}</h2>
            <h2> {it.email}</h2>
            <h2>{it.street}</h2>
            <h2> {it.suite}</h2>
            <h2> {it.phone}</h2>
            <h2> {it.zipcode}</h2>
            <h2> {it.website}</h2>
          </div>
        })}
      </div>
    </div>
  );
};

export default AboutUser;
