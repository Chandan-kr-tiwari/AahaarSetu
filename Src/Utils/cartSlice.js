import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,actions)=>{
           state.items.push(actions.payload) 
        },
        removeItem:(state,actions)=>{
             const idToRemove = actions.payload.id;
            const index = state.items.findIndex(item => item.id === idToRemove);
             if (index !== -1) state.items.splice(index, 1);
        },
        clearCart:(state,actions)=>{
            state.items.length=0
        }
    }
})

export const{addItem,removeItem,clearCart}= cartSlice.actions

export default cartSlice.reducer