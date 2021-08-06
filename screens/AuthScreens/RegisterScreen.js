import React,{useState,useEffect} from 'react';
import { View, Text, FormControl, ScrollView, Center, Button, Input, SimpleGrid } from 'native-base';
import Size from '../../constants/Size'
import * as AuthActions from '../../store/actions/auth';
import { NarrowBig } from '../../constants/Narrow';

const ChoiceCompany = () => {
    return (
        <View>

        </View>
    )
}

export const RegisterScreen = props => {
    const [choiceCompanyScreen,setChoiceCompanyScreen] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');

    const [passwordValue, setPasswordValue] = useState('');

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    const [emailInvalidText,setEmailInvalidText] = useState('');
    const [nameInvalidText,setNameInvalidText] = useState('');

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

    const vaildationName = () => {
        if(nameValue < 1 ){
            setNameInvalid(true);
            setNameInvalidText('Name is required')
            return false;
        }else{
            setNameInvalid(false);
            return true;
        }
    }

    function enter(){
        const e = vaildationEmail();
        const n = vaildationName();
        if(e && n){
            AuthActions.signUp(emailValue,nameValue,passwordValue)
        }
    }

    const changeScreen = () => {
        setChoiceCompanyScreen(state => !state);
    }

    let content;

    if(!choiceCompanyScreen){
        content = <View bg='white' width={narrow ? screen.width / 1.3 : 400} shadow={8} px={6} py={5} rounded='lg'>
            <FormControl isInvalid={nameInvalid}>
                <FormControl.Label>Name</FormControl.Label>
                <Input 
                placeholder='name'
                onChangeText={text=>setNameValue(text)}
                onEndEditing={vaildationName}
                />
                <FormControl.ErrorMessage>{nameInvalidText}</FormControl.ErrorMessage>
            </FormControl>
            <FormControl my={4} isInvalid={emailInvalid}>
                <FormControl.Label>Email</FormControl.Label>
                <Input 
                placeholder='email' 
                onChangeText={text=>setEmailValue(text)}
                onEndEditing={vaildationEmail}
                />
                <FormControl.ErrorMessage>{emailInvalidText}</FormControl.ErrorMessage>
            </FormControl>
            <FormControl my={4}>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                placeholder='password' 
                onChangeText={text=>setPasswordValue(text)}
                />
            </FormControl>
            <View flexDirection='row' justifyContent='space-between'>
                <Button 
                colorScheme='green' 
                onPress={enter}
                >Register</Button>

                <Button 
                colorScheme='dark' 
                onPress={()=>props.navigation.replace('Login')}
                >Login</Button>
            </View>
        </View>;
    }else{
        content = <Text>con</Text>
    }


    return (
        <ScrollView contentContainerStyle={{
            flexGrow:1,
        }}>
            <Center py={10} flex={1} bg='green.500'>
                {content}
            </Center>
            
        </ScrollView>
    );
}

export default RegisterScreen;