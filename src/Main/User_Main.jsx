import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import Header from '../Header/Header';
import User_MainStyles from './User_MainStyles';
import Svg, { Path } from 'react-native-svg';

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

function User_Main() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  
  return (
    <View style={User_MainStyles.full}>
      <View>
        <Header />
      </View>
      <View style={User_MainStyles.container}>{/*top*/} 
        <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(192, 192, 192)" class="bi bi-person-circle" viewBox="0 0 16 16">
          <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </Svg>
        <View style={User_MainStyles.userarea}>
          <Text style={User_MainStyles.usertext}>김준(사용자)</Text>
          <Text style={User_MainStyles.timetext}>남은시간:6시간 50분</Text>
        </View>
        <TouchableOpacity style={User_MainStyles.button} onPress={(toggleModal)}>
          <Text style={User_MainStyles.buttonText}>+ 충전</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => (
            <View style={User_MainStyles.tableRow}>
              <View style={User_MainStyles.tableCell}>
                <Text>1</Text>
              </View>
              <View style={User_MainStyles.tableCell}>
                <Text>2</Text>
              </View>
              <View style={User_MainStyles.tableCell}>
                <Text>3</Text>
              </View>
              <View style={User_MainStyles.tableCell}>
                <Text>4</Text>
              </View>
              <View style={User_MainStyles.tableCell}>
                <Text>5</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={User_MainStyles.adblock}>
        <Text>ADblock</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={User_MainStyles.centeredView}>
          <View style={User_MainStyles.modalView}>
            <ScrollView>
              <View style={User_MainStyles.payment}>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}1,000{"\n"}1시간</Text>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}2,000{"\n"}2시간10분</Text>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}3,000{"\n"}3시간20분</Text>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}5,000{"\n"}6시간</Text>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}10,000{"\n"}12시간</Text>
                <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}직접 입력</Text>
              </View>
            </ScrollView>
            <View style={User_MainStyles.modalinformation}>
              <Text style={User_MainStyles.modalinformationtext}>  아이디 : name1</Text>
              <Text style={User_MainStyles.modalinformationtext}>  이용여부 : 미사용중</Text>
              <Text style={User_MainStyles.modalinformationtext}>  잔여시간 : 6시간 50분</Text>
            </View>
            <TouchableOpacity style={User_MainStyles.paymentbtn}>
              <Text style={User_MainStyles.paymentbtntext}>+ 결제하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={User_MainStyles.closebtn}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  </View>
  );
}

export default User_Main;