import Size from "./Size";
import { useState, useEffect } from "react";

export const NarrowBig = () => {
    let screen = Size();
    const [nerrow,setNerrow] = useState(screen.width > 600 ? false : true);

    useEffect(() => {
        if(screen.width > 600){
            setNerrow(false);
        }else{
            setNerrow(true);
        }
        
    }, [screen]);

    return nerrow;
}

export const NarrowSmall = () => {
    let screen = Size();
    const [nerrow,setNerrow] = useState(screen.width > 400 ? false : true);

    useEffect(() => {
        if(screen.width > 400){
            setNerrow(false);
        }else{
            setNerrow(true);
        }
        
    }, [screen]);

    return nerrow;
}