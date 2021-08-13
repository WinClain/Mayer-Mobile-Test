import React,{useEffect, useState} from 'react';
import { Text, View, FormControl, ScrollView, Center, Button, Input } from 'native-base';
import Size from '../../constants/Size'
import * as AuthActions from '../../store/actions/auth';
import { NarrowBig } from '../../constants/Narrow';
import { useDispatch } from 'react-redux';

export const LoginScreen = props => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [emailInvalidText,setEmailInvalidText] = useState('');
    const [passwordInvalidText,setPasswordInvalidText] = useState('');

    let screen = Size();
    let narrow = NarrowBig();

    const vaildationEmail = () => {
        if(emailValue < 1 || !emailValue.includes('@') || !emailValue.includes('.')){
            setEmailInvalid(true);
            if(emailValue < 1){
                setEmailInvalidText('Email is required')
            }else{
                setEmailInvalidText('Email field must be email')
            }
            return false;
        }else{
            setEmailInvalid(false);
            return true;
        }
    }

    const vaildationPassword = () => {
        if(passwordValue < 6 ){
            setPasswordInvalid(true);
            setPasswordInvalidText('Password must contain at least 8 characters')
            return false;
        }else{
            setPasswordInvalid(false);
            return true;
        }
    }
    const dispatch = useDispatch();

    const enter = async () =>{
        const e = vaildationEmail();
        const p = vaildationPassword();
        if(e && p){
            try{
                await dispatch(AuthActions.signIn(emailValue,passwordValue));
                props.navigation.navigate('Main');
            }catch(e){
                console.log(e);
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={{
            flexGrow:1,
        }}>
            <Center py={10} flex={1} bg='green.500'>
                <View bg='white' width={narrow ? screen.width / 1.3 : 400} shadow={8} px={6} py={5} rounded='lg'>
                    <FormControl isInvalid={emailInvalid}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input 
                        placeholder='email' 
                        onChangeText={text=>setEmailValue(text)}
                        onEndEditing={vaildationEmail}
                        />
                        <FormControl.ErrorMessage>{emailInvalidText}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl my={4} isInvalid={passwordInvalid}>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input 
                        placeholder='password' 
                        onChangeText={text=>setPasswordValue(text)}
                        onEndEditing={vaildationPassword}
                        />
                        <FormControl.ErrorMessage>{passwordInvalidText}</FormControl.ErrorMessage>
                    </FormControl>
                    <View flexDirection='row' justifyContent='space-between'>
                        <Button 
                        colorScheme='green' 
                        onPress={enter}
                        >Login</Button>

                        <Button 
                        colorScheme='dark' 
                        onPress={()=>props.navigation.replace('Register')}
                        >Register</Button>
                    </View>
                </View>
            </Center>
            
        </ScrollView>
    );
}

export default LoginScreen;