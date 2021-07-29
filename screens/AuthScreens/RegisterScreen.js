import React,{useState} from 'react';
import { Text, View, FormControl, ScrollView, Center, Button, Input } from 'native-base';
import Size from '../../constants/Size'

export const RegisterScreen = props => {
    const [formInvalid, setFormInvalid] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    const [emailInvalidText,setEmailInvalidText] = useState('');
    const [nameInvalidText,setNameInvalidText] = useState('');

    const screen = Size();

    const vaildationEmail = () => {
        if(emailValue < 1 || !emailValue.includes('@') || !emailValue.includes('.')){
            setEmailInvalid(true);
            if(emailValue < 1){
                setEmailInvalidText('Email is required')
            }else{
                setEmailInvalidText('Email field must be email')
            }
        }else{
            setEmailInvalid(false);
        }
    }

    const vaildationName = () => {
        if(nameValue < 1 ){
            setNameInvalid(true);
            setNameInvalidText('Name is required')
        }else{
            setNameInvalid(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={{
            flexGrow:1,
        }}>
            <Center py={10} flex={1} bg='green.500'>
                <View bg='white' width={screen.width > 600 ? 400 : 300} shadow={8} px={6} py={5} rounded='lg'>
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
                    <View flexDirection='row' justifyContent='space-between'>
                        <Button>Register</Button>
                        <Button colorScheme='dark' onPress={()=>props.navigation.replace('Login')}>Login</Button>
                    </View>
                </View>
            </Center>
            
        </ScrollView>
    );
}

export default RegisterScreen;