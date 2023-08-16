import { createAction, createReducer } from "@reduxjs/toolkit";


import { ADD_TO, REMOVE_FROM_BASKET, FETCH_USERS, FETCH_USER_ID, ADD_AND_REMOVE_USER } from './actions';

import imf from '../../img/bag_rose.jpg'

const LOCAL_STORAGE_KEY = 'OUR_STORAGE_ITEMS'
const product = [
    {
        name: 'Сумка',
        price: '1500',
        descr: 'Some descr',
        id: 0,
        img: imf

    },
    {
        name: 'Сумка 1',
        price: '1000',
        descr: 'Some descr',
        id: 1,
        img: imf

    },
    {
        name: 'Сумка 3',
        price: '1200',
        descr: 'Some descr',
        id: 2,
        img: imf
    },
    {
        name: 'Сумка 2',
        price: '1300',
        descr: 'Some descr',
        id: 3,
        img: imf
    },
]
// DefaultState
const defaultState = {
    users: [],
    curentUser: [],
    it: product,
    basket: localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [],

}
// actions
export const addUser = createAction(ADD_TO);
export const removeUser = createAction(REMOVE_FROM_BASKET);
export const fetchUser = createAction(FETCH_USERS)
export const fetchUserId = createAction(FETCH_USER_ID)
export const addUserandRemove = createAction(ADD_AND_REMOVE_USER)
//Reducer 
export const userReducer = createReducer(defaultState, {

    [fetchUser]: function (state, { payload }) {
        payload.forEach(it => {
            it.changeText = false;
        })
        state.users.push(payload)

    },
    [addUserandRemove]: function (state, { payload }) {


        // const it1 = payload.product;
        // it1.changeText = true
        // let it1 = Object.assign({}, payload.product);
        // // console.log(it1)
        // it1.changeText = true
        console.log(payload.product)
        const newUser = state.users.filter(it => it!==payload.product);

        console.log(newUser)



        state.users = newUser
        // console.log(newUser)




        // console.log(it1)
        // state.users.push(it1)

        // state.users.push(newObj)

        // console.log(payload.product)
        // state.users.push(payload)

        // console.log(payload.filter(it=>it))
        // state.users.push(payload)
        //     payload.changeText = true
        //     const newUser = [...state.basket,payload]

        //     state.basket.push(payload)
        //    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newUser))

    },

    [addUser]: function (state, { payload }) {
        // payload.product.changeText = true
        // state.basket.push(payload)
        const newUser = [...state.basket, payload]

        state.basket.push(payload)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser))

    },

    [removeUser]: function (state, { payload }) {
        const newBaskets = state.basket.filter(it => it.product.id !== payload)
        state.basket = newBaskets
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newBaskets))

    },
    [fetchUserId]: function (state, { payload }) {
        const curUser = payload

        state.curentUser = curUser;



    },
})

