import { createContext } from "react";

const AppContext = createContext();
export const useAppContext = () =>{
    return useContext(AppContext);
};
