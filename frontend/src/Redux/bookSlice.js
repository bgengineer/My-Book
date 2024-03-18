import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/book/"

const initialState = {
    book : [],
    status: 'idle',
    error: null
}

export const fetchBook = createAsyncThunk('book/fetchBook/', async() => {
    const response = await axios.get(URL)
    console.log("fetchbook called")
    return response.data
})

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
           .addCase(fetchBook.pending, (state, action) => {
            state.status = "loading"
           })
           .addCase(fetchBook.fulfilled, (state, action) => {
            state.status = "successed"
            const loadBook = action.payload.map(data => {return data})
            state.book = state.book.concat(loadBook)
           })
           .addCase(fetchBook.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
           })
    }
})

export const getBooks = (data) => data.books.book
export const getStatus = (data) => data.books.status
export const getError = (data) => data.books.error

export default bookSlice.reducer