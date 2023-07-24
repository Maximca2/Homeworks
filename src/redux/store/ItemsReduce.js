import imf from '../../img/bag_rose.jpg'
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
const DATA_NOT_CHANGED = 'DATA_NOT_CHANGED'
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

let defaultState = {
    it: product,
    basket: localStorage.getItem(LOCAL_STORAGE_KEY)?JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)):[],

}

export const itemsReducer = (state = defaultState, { payload, type }) => {
    switch (type) {

        case ADD_TO_BASKET:
            const newBasket = [...state.basket, payload]
            localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newBasket))
            return   { ...state, basket: newBasket } 
        case REMOVE_FROM_BASKET:
            const newBaskets = state.basket.filter(it => it.product.id !== payload)
            localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newBaskets))
            return { ...state, basket: newBaskets }

        case DATA_NOT_CHANGED:
            return { ...state, basket: [...state.basket, payload] }

        default:
            return state
    }
}



