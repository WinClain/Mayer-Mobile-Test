import React,{useState} from 'react';
import AuthNavigation from './navigation/AuthNavigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NativeBaseProvider, Text,Center, extendTheme} from 'native-base';

const loadAsync = () => {
    return Font.loadAsync({
        'black':require('./assets/fonts/Poppins-Black.ttf'),
        'bold':require('./assets/fonts/Poppins-Bold.ttf'),
        'extra-light':require('./assets/fonts/Poppins-ExtraLight.ttf'),
        'medium':require('./assets/fonts/Poppins-Medium.ttf'),
        'semi-bold':require('./assets/fonts/Poppins-SemiBold.ttf'),
    })
}

export default function App() {
    const [dataLoad,setDataLoad] = useState(false);
    const appTheme = extendTheme({
        components:{
            Text:{
                baseStyle:{
                    fontFamily:'medium'
                }
            }
        }
    })

    if(!dataLoad){
        return <AppLoading startAsync={loadAsync} onFinish={()=>setDataLoad(true)} onError={error=>console.log(error)}/>
    }
    return (
        <NativeBaseProvider theme={appTheme}>
            <AuthNavigation />
        </NativeBaseProvider>
    );
}



