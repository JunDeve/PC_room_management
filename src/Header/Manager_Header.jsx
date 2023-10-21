import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import Manager_HeaderStyles from './Manager_HeaderStyles';
import Svg, { Path, Circle } from 'react-native-svg';

function Manager_Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
    <View style={Manager_HeaderStyles.container}>
      <TouchableOpacity style={Manager_HeaderStyles.button} onPress={toggleModal}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="rgb(255, 255, 255)">
          <Path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
        </Svg>
      </TouchableOpacity>
      <Text style={Manager_HeaderStyles.text}>PC management</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
      <View style={Manager_HeaderStyles.modal}>
        <View style={Manager_HeaderStyles.modalview}> 
          <View style={Manager_HeaderStyles.modaluser}>
            <View style={Manager_HeaderStyles.modaluserimg}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(255, 255, 255)" class="bi bi-circle-fill" viewBox="0 0 16 16">
                <Circle cx="8" cy="8" r="8"/>
              </Svg>
            </View>
            <Text style={{ ...Manager_HeaderStyles.modaltext, marginBottom: 20 }}>PCAD1(관리자)</Text>
          </View>
          <View style={Manager_HeaderStyles.separator} />
          <TouchableOpacity>
            <Text style={Manager_HeaderStyles.modalmenutext}>장비 관리</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Manager_HeaderStyles.modalmenutext}>회원 관리</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Manager_HeaderStyles.modalmenutext}>좌석 관리</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Manager_HeaderStyles.modalmenutext}>백업</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={Manager_HeaderStyles.modalmenutext}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>    
  </View>
  );
}

export default Manager_Header;