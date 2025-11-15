import { createContext, ReactNode, useContext } from "react";
import { getUser } from "./appwrite";
import { useAppwrite } from "./use-appwrite";

interface User{
    $id:string;
    name:string;
    email:string;
    avatar:string;
}

interface GlobalContextType {
    isLoggedin:boolean;
    user:User|null;
    loading:boolean;
    refetch:(newParams?: Record<string,string|number>) => Promise<void>;
}


const GlobalContext = createContext<GlobalContextType| undefined>(undefined);

export const GlobalProvider = ({children}:{children:ReactNode}) =>{
    const {
        data:user,
        loading,
        refetch,
    } = useAppwrite({
        fn: getUser,

    });
    const isLoggedin = !!user;
    console.log(JSON.stringify(user, null,2))
    return (

    <GlobalContext.Provider value={{
        isLoggedin,
        user,
        loading,
        refetch,
    }}>
        {children}
    </GlobalContext.Provider>
    )
}

export const usesGlobalContent = ():GlobalContextType =>{
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error(`useGloblaContext must be used within a GlobalProvider`);
    }
    return context;
}

export default GlobalProvider;