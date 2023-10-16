import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;


const MainStyles = StyleSheet.create({
  full:{
    width: Window_width, 
    height: Window_height
  },
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  userarea:{
    paddingHorizontal: 8,
  },
  usertext: {
    fontSize: 18,
    color: '#000000',
  },
  timetext: {
    fontSize: 16,
    color: '#C0C0C0',
  },
  button: {
    marginLeft: 60,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: '#A0A0A0',
    borderRadius: 30,
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
  tableCell: {
    width: Window_width * 0.19,
    height: Window_height * 0.045,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: Window_height * 0.6,
    width: Window_width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modaltext: {
    backgroundColor: '#A0A0A0',
    textAlign: 'center',
    width: Window_height * 0.115,
    height: Window_height * 0.115,
    margin: 2,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  payment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modalinformation: {
    position: 'relative',
    height: Window_height * 0.3,
    justifyContent: 'center',
  },
  modalinformationtext: {
    height: Window_height * 0.06,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    margin: 5,
    padding: 15,
  },
  paymentbtn: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#A0A0A0',
    width: Window_width * 0.3,
    height: Window_height * 0.05,
  },
  paymentbtntext: {
    textAlign: 'center',
    padding: 12
  },
});

export default MainStyles;