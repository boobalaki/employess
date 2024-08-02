import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
import Update from "./Update";


const userSlices =createSlice({
    name:"users",
    initialState:userList,
    reducers:{

        addUser:(state,action) => {
            
            state.push(action.payload)

        },

        updateUser:(state,action) => {
          const {id,name,email,Password,Language} =action.payload;
          const uu = state.find (users=>users.id==id);
          if(uu){
            uu.name= name;
            uu.email = email;
            uu.Password =Password;
            uu.Language =Language;
          }
        },

        deleteUser:(state,action) => {
            const {id} =action.payload;
            const uu = state.find (users=>users.id==id);
            if(uu){
                return state.filter (f => f.id !==id)
            }
        }

    }
})


export const {addUser , updateUser ,deleteUser} = userSlices.actions
export default userSlices.reducer;