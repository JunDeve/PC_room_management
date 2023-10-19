import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import HeaderStyles from './HeaderStyles';
import Svg, { Path, Circle } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

function Header(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { user_id, user_pwd, user_number, user_address, user_time, timeString  } = props;

  const navigation = useNavigation();
  const route = useRoute();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToInfoUser = () => {
    navigation.navigate('Info_User', {
      user_id: route.params.user_id,
      user_pwd: route.params.user_pwd,
      user_number: route.params.user_number,
      user_time: timeString,
    });
  };  

  return (
    <View style={HeaderStyles.container}>
      <TouchableOpacity style={HeaderStyles.button} onPress={toggleModal}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="rgb(255, 255, 255)">
          <Path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
        </Svg>
      </TouchableOpacity>
      <Text style={HeaderStyles.text}>PC management</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={HeaderStyles.modal}>
          <View style={HeaderStyles.modalview}>
            <View style={HeaderStyles.modaluser}>
              <View style={HeaderStyles.modaluserimg}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(255, 255, 255)" class="bi bi-circle-fill" viewBox="0 0 16 16">
                  <Circle cx="8" cy="8" r="8" />
                </Svg>
              </View>
              <Text style={HeaderStyles.modaltext}>{user_id}(사용자)</Text>
              <Text style={HeaderStyles.modaltexttime}>{`남은시간: ${user_time}`}</Text>
            </View>
            <View style={HeaderStyles.separator} />
            <TouchableOpacity onPress={navigateToInfoUser}>
              <Text style={HeaderStyles.modalmenutext}>내정보</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={HeaderStyles.modalmenutext}>예약</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={HeaderStyles.modalmenutext}>제어</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={HeaderStyles.modalmenutext}>충전내역</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={HeaderStyles.modalmenutext}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Header;