import imf from '../MainPage/img/bag_rose.jpg'
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
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

const defaultState = {
    it: product,
    basket: [],
    
}
export const itemsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_TO_BASKET:
            return { ...state, basket: [...state.basket, action.payload] }

        case REMOVE_FROM_BASKET:

            return { ...state, basket:state.basket.filter(it=>it.product.id!==action.payload) }
        default:
            return state
    }
}
