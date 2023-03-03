import CART_ACTION_TYPES from './cart.types';

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            console.log("CART REDUCER FIRED");
            return {
                ...state,
                cartItems: payload //really pay attention to payload format, don's just spread it out w/o thinking about the structure!!!
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            console.log("ISOPEN REDUCER FIRED");
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    };
};