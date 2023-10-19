import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import InfoUserStyles from './InfoUserStyles';

function Info_User(props) {
  const userId = props.route.params.user_id;

  const [password, setPassword] = useState(props.route.params.user_pwd);
  const [phoneNumber, setPhoneNumber] = useState(props.route.params.user_number);
  const [address, setAddress] = useState(props.route.params.user_address);

  const handleSave = () => {

  };

  return (
    <View style={InfoUserStyles.container}>
      <Text style={InfoUserStyles.label}>아이디:</Text>
      <TextInput
        style={InfoUserStyles.input}
        value={userId}
        editable={false}
      />

      <Text style={InfoUserStyles.label}>비밀번호:</Text>
      <TextInput
        style={InfoUserStyles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Text style={InfoUserStyles.label}>전화번호:</Text>
      <TextInput
        style={InfoUserStyles.input}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />

      <Text style={InfoUserStyles.label}>주소:</Text>
      <TextInput
        style={InfoUserStyles.input}
        onChangeText={text => setAddress(text)}
        value={address}
      />

      <TouchableOpacity style={[InfoUserStyles.saveButton, { backgroundColor: 'gray' }]}>
        <Text style={InfoUserStyles.buttonText}>저장</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Info_User;
