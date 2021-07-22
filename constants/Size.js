import React,{useEffect,useState} from 'react';
import { Dimensions } from 'react-native';

export const Size = () => {
    const [screen,setScreen] = useState(Dimensions.get('window'));

    useEffect(() => {
        const change = () => {
            setScreen(Dimensions.get('window'));
        }
        Dimensions.addEventListener('change',change);
        return () => {
            Dimensions.removeEventListener('change',change);
        }
    });

    return {...screen};
}

export default Size;