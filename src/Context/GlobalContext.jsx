import { createContext, useState } from "react";
import { activity1, activity2 } from "../MetaData/Activities"; 
export const GlobalContext = createContext({});

export function GlobalContextProvider({children}){
    const [activity, setActivity] = useState(activity1);

    return (
        <GlobalContext.Provider value = {{
            activity,
            setActivity
        }}>
            {children}
        </GlobalContext.Provider>
    );

}