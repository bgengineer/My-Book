import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './bookSlice'

export const store = configureStore({
    reducer: {
        books: BookReducer
    }
})