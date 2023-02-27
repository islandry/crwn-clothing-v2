import CART_ACTION_TYPES from './cart.types';

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

//helper functions for adding, removing, and cleaning cart
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => {
        item.id === productToAdd.id;
    });

    if(existingCartItem){
        return cartItems.map((each) => {
            each.id === productToAdd.id ?
            {...each, quantity : each.quantity + 1} :
            each;
        });
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((item) => {
        item.id === productToRemove.id;
    });

    if(existingCartItem){
        if(existingCartItem.quantity === 1){
            return cartItems.filter((item) => {
                item.id !== productToRemove.id;
            })
        }else{
            return cartItems.map((item) => {
                item.id === productToRemove.id ?
                {...item, quantity: item.quantity - 1} :
                item;
            });
        }
    }
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => {
        item.id !== cartItemToClear.id;
    });
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            const {addOrRemoveOrClear} = payload;
            
            const newItems = [];
            if(addOrRemoveOrClear === 'add'){
                newItems = addCartItem(state.cartItems, payload);
            }else if(addOrRemoveOrClear === 'remove'){
                newItems = removeCartItem(state.cartItems, payload);
            }else{
                newItems = clearCartItem(state.cartItems, payload);
            }
            
            const newItemCount = newItems.reduce((acc, item) => {
                acc + item.quantity,
                0
            });

            const newTotal = newItems.reduce((acc, item) => {
                acc + item.quantity * item.price,
                0
            });

            return {
                ...state,
                cartItems: newItems,
                cartCount: newItemCount,
                cartTotal: newTotal
            };
        
        default:
            return state;
    };
};