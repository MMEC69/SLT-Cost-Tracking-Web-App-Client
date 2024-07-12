import { createContext, useState } from "react";
import { activity1, activity2 } from "../MetaData/Activities"; 
export const GlobalContext = createContext({});

export function GlobalContextProvider({children}){
    const [activity, setActivity] = useState(activity1);
    const [popup, setPopup] = useState(null)

    return (
        <GlobalContext.Provider value = {{
            activity,
            setActivity,
            popup,
            setPopup
        }}>
            {children}
        </GlobalContext.Provider>
    );

}