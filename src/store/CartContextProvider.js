import CartContext from "./cart-context";
import {useReducer} from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state , action) =>{
    if(action.type === 'ADD_ITEM') {
        const updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existingCarItemIndex = state.items.findIndex((item) =>  {
            return item.id === action.item.id
        });

        const existingCartItem = state.items[existingCarItemIndex];

        let updatedItem;
        let updatedItems;

        if(existingCartItem) {
            updatedItem= {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };

            updatedItems = [...state.items];
            updatedItems[existingCarItemIndex] = updatedItem;
        } else {
            updatedItem = {
                ...action.item
            }
             updatedItems = state.items.concat(updatedItem);
        }

    return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
    }
}
if(action.type === 'REMOVE_ITEM'){
    
    const existingCarItemIndex = state.items.findIndex((item)=>{
        return item.id === action.id
    })
    const existingCartItem = state.items[existingCarItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if(existingCartItem.amount === 1){
        updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
        updatedItems = [...state.items];
        updatedItems[existingCarItemIndex] = updatedItem;
    }
    return {
        items:updatedItems,
        totalAmount: updateTotalAmount,
    }
}
return defaultCartState

};

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item,
        });
    };
    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return <CartContext.Provider value={cartContext}>{props.children} </CartContext.Provider>
}

export default CartContextProvider;