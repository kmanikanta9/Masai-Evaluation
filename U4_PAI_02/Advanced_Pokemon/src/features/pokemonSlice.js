// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
// import axios from "axios"

// export const Pokemon=createAsyncThunk("Project/details",async()=>{
//     let res=await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    
//     return res.data.results
// })


// const ProjectSlice= createSlice({
//     name:"Pokemon",
//     initialState:{data:[],loading:false,error:null,editDetails:{}},
//     extraReducers:(builder)=>{
//         builder
//             .addCase(Project.fulfilled,(state,action)=>{
//                 state.loading=false
//                 state.data=action.payload
//             })
//             .addCase(Project.pending,(state)=>{
//                 state.loading=true
//             })
//             .addCase(Project.rejected,(state,action)=>{
//                 state.loading=false
//                 state.error=action.payload
//             })

           

//     }
// })

// export default ProjectSlice.reducer