"use client";

import { Provider } from "react-redux";
import { Store } from "./store";


    type props = {
        children:React.ReactNode
    }

export function Providers ({children}:props){
    console.log('Rendering Providers component'); 
    return <Provider store={Store}>
        {children}
         </Provider>
}