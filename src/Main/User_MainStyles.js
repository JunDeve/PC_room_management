import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;


const User_MainStyles = StyleSheet.create({
  full: {
    width: Window_width,
    height: Window_height
  },
  container: {
    flexDirection: 'row',
    padding: 8,
    height: '30%'
  },
  userarea: {
    paddingHorizontal: 8,
  },
  usertext: {
    fontSize: 18,
    color: '#000000',
  },
  usertabletext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timetext: {
    fontSize: 16,
    color: '#C0C0C0',
  },
  button: {
    marginLeft: 60,
    paddingHorizontal: 20,
    paddingVertical: 11,
    backgroundColor: '#A0A0A0',
    borderRadius: 30,
    height: '23%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  adblock: {
    flex: 1,
    backgroundColor: '#A0A0A0',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalView: {
    height: Window_height * 0.75,
    width: Window_width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectTimeToggleText: {
    textAlign: 'center',
  },
  selectBox: {
    flex: 1,
    justifyContent: 'center',
  },
  selectBoxContent: {
    width: 250,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  actionButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
  },
  closebtn2: {
    textAlign: 'right',
    marginTop: 15,
    marginRight: -100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modaltext: {
    backgroundColor: '#A0A0A0',
    width: Window_height * 0.115,
    height: Window_height * 0.115,
    margin: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  payment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    top: 0,
  },
  modalinformation: {
    position: 'relative',
    height: Window_height * 0.3,
    justifyContent: 'center',
  },
  modalinformationtext: {
    height: Window_height * 0.06,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    margin: 5,
  },
  paymentbtn: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#A0A0A0',
    width: Window_width * 0.3,
    height: Window_height * 0.06,
  },
  paymentbtntext: {
    textAlign: 'center',
    padding: 12,
    color: '#FFFFFF',
  },
  closebtn: {
    textAlign: 'right',
    marginTop: 50,
    marginRight: 20,
  },
  seatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -130,
  },
  seatText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#FFFFFF',
  },
  tableCell: {
    width: '17%',
    aspectRatio: 1,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
  },
  verticalMargin: {
    marginVertical: 5,
  },
});

export default User_MainStyles;