import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LoginStyles from './LoginStyles';
import Header from '../Header/Header';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const [isChecked, setIsChecked] = React.useState(false);
    const navigation = useNavigation();

    const openMainScreen = () => {
        navigation.navigate('Main');
    };

  return (
    <View>
        <View>
            <Header />
        </View>
        <View style={LoginStyles.top}>
            <Text style={LoginStyles.signtext}>Sign In</Text>
            <View style={LoginStyles.image}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="rgb(192, 192, 192)" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </Svg>
            </View>
            <View>
                <TextInput style={LoginStyles.inputbox} placeholder='Username'/>
                <TextInput style={LoginStyles.inputbox} placeholder='Password'/>
            </View>
        </View>
        <View style={LoginStyles.middle}>
            <CheckBox
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
            />
            <Text>Remember me</Text>
            <Text style={LoginStyles.forgot}>Forgot password</Text>
        </View>
        <View>
            <TouchableOpacity onPress={openMainScreen}>
                <Text style={LoginStyles.signin}>Sign in</Text>
            </TouchableOpacity>
            <Text style={LoginStyles.signin}>Google</Text>
            <Text style={LoginStyles.signin}>KaKao</Text>
        </View>
    </View>
  );
}

export default Login;
