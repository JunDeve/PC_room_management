import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import HeaderStyles from './HeaderStyles';
import Svg, { Path } from 'react-native-svg';

const handlePress = () => {
    Alert.alert('Custom Button Pressed');
};

function Header() {
  return (
    <View style={HeaderStyles.container}>
      <TouchableOpacity style={HeaderStyles.button} onPress={handlePress}>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="rgb(255, 255, 255)">
              <Path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
          </Svg>
        </TouchableOpacity>
      <Text style={HeaderStyles.text}>PC management</Text>
    </View>
  );
}

export default Header;
