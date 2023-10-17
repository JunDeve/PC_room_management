import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Header from '../Header/Header';
import User_MainStyles from './User_MainStyles';
import Svg, { Path } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

function User_Main() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  const totalMinutes = route.params.user_time;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const timeString = `${hours}시간 ${minutes}분`;

  const selectBox = () => {
    setSelectedBox(true);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSelectBoxModal = () => {
    setSelectedBox(false);
  };

  const headerProps = {
    user_id: route.params.user_id,
    user_time: timeString,
  };

  const seats = Array(20).fill(null);

  return (
    <View style={User_MainStyles.full}>
      <View>
        <Header {...headerProps} />
      </View>
      <View style={User_MainStyles.container}>{/*top*/}
        <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(192, 192, 192)" class="bi bi-person-circle" viewBox="0 0 16 16">
          <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <Path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </Svg>
        <View style={User_MainStyles.userarea}>
          <Text style={User_MainStyles.usertext}>{route.params.user_id}(사용자)</Text>
          <Text style={User_MainStyles.timetext}>{`남은시간: ${timeString}`}</Text>
        </View>
        <TouchableOpacity style={User_MainStyles.button} onPress={(toggleModal)}>
          <Text style={User_MainStyles.buttonText}>+ 충전</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <View style={User_MainStyles.seatGrid}>
          {seats.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                User_MainStyles.tableCell,
                (index % 4 === 1 || index % 4 === 3) && (Math.floor(index / 4) === 0) ? User_MainStyles.marginCell : null,
                (Math.floor(index / 4) !== 1) ? User_MainStyles.verticalMargin : null,
              ]}
              onPress={(selectBox)}
            />
          ))}
        </View>
      </View>
      <View style={User_MainStyles.adblock}>
        <Text>ADblock</Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedBox}
        onRequestClose={closeSelectBoxModal}
      >
        <View style={User_MainStyles.selectBox}>
          <View style={User_MainStyles.selectBoxContent}>
            <Text style={User_MainStyles.usertabletext}>좌석을 선택하셨습니다</Text>
            <TouchableOpacity style={User_MainStyles.actionButton} onPress={() => { /* 사용 버튼 눌렀을 때의 동작 구현 */ }}>
              <Text style={User_MainStyles.actionButtonText}>사용</Text>
            </TouchableOpacity>
            <TouchableOpacity style={User_MainStyles.actionButton} onPress={() => { /* 예약 버튼 눌렀을 때의 동작 구현 */ }}>
              <Text style={User_MainStyles.actionButtonText}>예약</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeSelectBoxModal}>
              <Text style={User_MainStyles.closebtn2}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={User_MainStyles.centeredView}>
          <View style={User_MainStyles.modalView}>
            <View style={User_MainStyles.payment}>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}1,000원{"\n"}(1시간)</Text>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}2,000원{"\n"}(2시간10분)</Text>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}3,000원{"\n"}(3시간20분)</Text>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}5,000원{"\n"}(6시간)</Text>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}10,000원{"\n"}(12시간)</Text>
              <Text style={User_MainStyles.modaltext}>{"\n"}{"\n"}직접 입력</Text>
            </View>
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