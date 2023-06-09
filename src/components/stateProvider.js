import React,{useContext,createContext,useReducer} from "react";
import { Provider } from "react";
const StateContext =createContext()
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
    </StateContext.Provider>
)
export const useStateValue = ()=>{useContext(StateContext)} 