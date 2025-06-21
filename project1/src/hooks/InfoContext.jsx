import { createContext } from "react";

export const InfoContext=createContext()

export const InfoProvider=({children})=>{
    const info={name:'Ram', age:25, email:''}
    return(
        <InfoContext.Provider value={info}>
            {children}
        </InfoContext.Provider>
    )
}