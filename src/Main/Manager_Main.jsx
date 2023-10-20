import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Manager_Header from '../Header/Manager_Header';
import Manager_MainStyles from './Manager_MainStyles';
import Svg, { Path } from 'react-native-svg';

function Manager_Main() {
  const [selectedSeats, setSelectedSeats] = useState(Array(20).fill(false));
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const seats = Array(20).fill(null);
  return (
    <View style={{ flex: 1 }}>
      <Manager_Header />
      <View style={Manager_MainStyles.seatGrid}>
        {seats.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              Manager_MainStyles.tableCell,
              selectedSeats[index] ? Manager_MainStyles.selectedSeat : null,
              (index % 4 === 1 || index % 4 === 3) && (Math.floor(index / 4) === 0) ? Manager_MainStyles.verticalMargin : null,
              (Math.floor(index / 4) !== 1) ? Manager_MainStyles.verticalMargin : null,
            ]}
            onPress={() => { }}
          >
          </TouchableOpacity>
        ))}
      </View>
      <View style={Manager_MainStyles.menuAll}>
        <View style={Manager_MainStyles.menu}>
          <View style={Manager_MainStyles.menu1}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={Manager_MainStyles.cctv}>CCTV</Text>
            </TouchableOpacity>
            <Text style={Manager_MainStyles.message}>전체메세지</Text>
          </View>
          <View style={Manager_MainStyles.menu2}>
            <Text style={Manager_MainStyles.network}>네트워크</Text>
            <Text style={Manager_MainStyles.program}>프로그램</Text>
          </View>
        </View>
        <View style={Manager_MainStyles.menu3}>
          <Text style={Manager_MainStyles.seat}>좌석 관리</Text>
          <Text style={Manager_MainStyles.user}>회원 관리</Text>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={Manager_MainStyles.centeredView}>
          <View style={Manager_MainStyles.modalView}>
            <View style={Manager_MainStyles.cctvlist}>
              <View style={Manager_MainStyles.cctvitem}>
                <Text style={Manager_MainStyles.cctvtext}>1번째 CCTV</Text>
                <TouchableOpacity>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-caret-right-square" viewBox="0 0 16 16">
                    <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <Path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </Svg>
                </TouchableOpacity>
              </View>
              <View style={Manager_MainStyles.cctvitem}>
                <Text style={Manager_MainStyles.cctvtext}>2번째 CCTV</Text>
                <TouchableOpacity>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-caret-right-square" viewBox="0 0 16 16">
                    <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <Path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </Svg>
                </TouchableOpacity>
              </View>
              <View style={Manager_MainStyles.cctvitem}>
                <Text style={Manager_MainStyles.cctvtext}>3번째 CCTV</Text>
                <TouchableOpacity>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-caret-right-square" viewBox="0 0 16 16">
                    <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <Path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </Svg>
                </TouchableOpacity>
              </View>
              <View style={Manager_MainStyles.cctvitem}>
                <Text style={Manager_MainStyles.cctvtext}>4번째 CCTV</Text>
                <TouchableOpacity>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-caret-right-square" viewBox="0 0 16 16">
                    <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <Path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={Manager_MainStyles.closebtn}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Manager_Main;