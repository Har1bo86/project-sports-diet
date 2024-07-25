import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    value: 0,
    gender: undefined,
    age: undefined,
    height: undefined,
    weight: undefined,
    result: {
        cCalories: undefined,
        protein: undefined,
        fat: undefined,
        carb: undefined,
    }

}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        },
        setWeight: (state, action) => {
            state.weight = action.payload
        },
        setTarget: (state, action) => {
            state.target = action.payload
        },
        setResult: (state, action) => {
            state.result = action.payload
        }
    }
})
export const { increment, decrement, calc, setAge, setGender, setHeight, setWeight, setTarget, setResult } = counterSlice.actions

export default counterSlice.reducer