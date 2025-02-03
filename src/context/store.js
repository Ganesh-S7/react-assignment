import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0},
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{
            state.count=0;
        },
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState:{name:'', address:'', email:'', phone:'', id:'', authenticated: false},
    reducers:{
        setUser:(state,action)=>{
            return {...state, ...action.payload};
        },
        setAuth:(state, action)=>{
            state.authenticated = action.payload;
        },
    },
});

const store = configureStore({
    reducer:{
        'counter': counterSlice.reducer,
        'user': userSlice.reducer,
    },
});

export const { setAuth, setUser } = userSlice.actions;
export const { increment, decrement, reset } = counterSlice.actions;

export default store;