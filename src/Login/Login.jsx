import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LoginStyles from './LoginStyles';
import Header from '../Header/Header';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const [isChecked, setIsChecked] = React.useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const openMainScreen = async () => {
        // navigation.navigate('Main');
        try {
            const response = await fetch('http://10.0.2.2:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: username, user_pwd: password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.redirect) {
                    console.log(data.message);
                    alert(data.message);
                    const { user_id, user_time } = data.userInfo;
                    navigation.navigate(data.redirect, { user_id, user_time });
                } else {
                    console.log(data.message);
                    alert(data.message);
                }
            } else {
                console.error('서버 요청 실패');
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };

    return (
        <View>
            <View style={{ marginTop: 50 }}></View>
            <View style={LoginStyles.top}>
                <Text style={LoginStyles.signtext}>Sign In</Text>
                <View style={LoginStyles.image}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="rgb(192, 192, 192)" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </Svg>
                </View>
                <View>
                    <TextInput
                        style={LoginStyles.inputbox}
                        placeholder='Username'
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={LoginStyles.inputbox}
                        placeholder='Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
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
