import React,{useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NativeBaseProvider, Text,Center, extendTheme} from 'native-base';
import AppNavigation from './navigation/AppNavigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AuthReducer from './store/reducers/auth';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth:AuthReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk))

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
            },
            Button:{
                defaultProps:{
                    variant:'ghost'
                },
                baseStyle:{
                    padding:2
                }
            },
            Input:{
                defaultProps:{
                    autoCapitalize:'none'
                }
            }
        }
    })

    if(!dataLoad){
        return <AppLoading startAsync={loadAsync} onFinish={()=>setDataLoad(true)} onError={error=>console.log(error)}/>
    }
    return (
        <NativeBaseProvider theme={appTheme}>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </NativeBaseProvider>
    );
}



