import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state, { payload = 1 }) => {
            state.value += payload
        },
        decrement : (state, { payload = 1 }) => {
            state.value -= payload
        }
    }
})

export const { increment , decrement } = CounterSlice.actions
export default CounterSlice.reducer ;