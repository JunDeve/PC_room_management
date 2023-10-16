import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import Header from '../Header/Header'; // Header.jsx 파일 가져오기
import MainStyles from './MainStyles';
import Svg, { Path } from 'react-native-svg';

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

function Main() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={MainStyles.full}>
      <View>
        <Header />
      </View>
      <View style={MainStyles.container}>{/*top*/} 
        <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(192, 192, 192)" class="bi bi-person-circle" viewBox="0 0 16 16">
          <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </Svg>
        <View style={MainStyles.userarea}>
          <Text style={MainStyles.usertext}>김준(사용자)</Text>
          <Text style={MainStyles.timetext}>남은시간:6시간 50분</Text>
        </View>
        <TouchableOpacity style={MainStyles.button} onPress={(toggleModal)}>
          <Text style={MainStyles.buttonText}>+ 충전</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => (
            <View style={MainStyles.tableRow}>
              <View style={MainStyles.tableCell}>
                <Text>1</Text>
              </View>
              <View style={MainStyles.tableCell}>
                <Text>2</Text>
              </View>
              <View style={MainStyles.tableCell}>
                <Text>3</Text>
              </View>
              <View style={MainStyles.tableCell}>
                <Text>4</Text>
              </View>
              <View style={MainStyles.tableCell}>
                <Text>5</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={MainStyles.adblock}>
        <Text>ADblock</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={MainStyles.centeredView}>
          <View style={MainStyles.modalView}>
            <ScrollView>
              <View style={MainStyles.payment}>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}1,000{"\n"}1시간</Text>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}2,000{"\n"}2시간10분</Text>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}3,000{"\n"}3시간20분</Text>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}5,000{"\n"}6시간</Text>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}10,000{"\n"}12시간</Text>
                <Text style={MainStyles.modaltext}>{"\n"}{"\n"}직접 입력</Text>
              </View>
            </ScrollView>
            <View style={MainStyles.modalinformation}>
              <Text style={MainStyles.modalinformationtext}>  아이디 : name1</Text>
              <Text style={MainStyles.modalinformationtext}>  이용여부 : 미사용중</Text>
              <Text style={MainStyles.modalinformationtext}>  잔여시간 : 6시간 50분</Text>
            </View>
            <TouchableOpacity style={MainStyles.paymentbtn}>
              <Text style={MainStyles.paymentbtntext}>+ 결제하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={MainStyles.closebtn}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  </View>
  );
}

export default Main;