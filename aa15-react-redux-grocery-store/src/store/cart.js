const ADD_CART_ITEM = 'cart/ADD'

export const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        cart: item
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {
      case ADD_CART_ITEM: {

        return {...state, [action.cart.id]: action.cart};
      }
      default:
        return state;
    }
}
