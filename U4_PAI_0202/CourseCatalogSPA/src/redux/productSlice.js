import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";


export const productsData=createAsyncThunk(
    "data/fetchProducts",
    async()=>{
        const response = await fetch("https://dummyjson.com/products")
        return response.json()
    }
)

const fetchSlice=createSlice({
    name:"fetchProducts",
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(productsData.pending,(state)=>{
            state.loading=true
        })
        .addCase(productsData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        })
        .addCase(productsData.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})

export const {data,error,loading}=fetchSlice.actions
export default fetchSlice.reducer