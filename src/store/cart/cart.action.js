import CART_ACTION_TYPES from "./cart.types";
import { createAction } from '../../utils/reducer/reducer.utils';



export const addItemToCart = (payload) => createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload);

export const removeItemFromCart = (payload) => createAction(CART_ACTION_TYPES.removeItemFromCart, payload);

export const setCartItem = (payload) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);