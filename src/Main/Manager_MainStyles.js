import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;

const Manager_HeaderStyles = StyleSheet.create({
  full: {
    width: Window_width,
    height: Window_height,
  },
  menuAll: {
    transform: [{ scale: 0.9 }],
    top: 50,
  },
  seatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
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
  menu: {
    position: 'relative',
    bottom: Window_height * 0.08
  },
  menu1: {
    flexDirection: 'row',
    width: Window_width * 0.9,
    height: Window_height * 0.07,
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10,
  },
  cctv: {
    textAlign: 'center',
    width: Window_width * 0.45,
    height: Window_height * 0.07,
    backgroundColor: '#A0A0A0',
    padding: Window_height * 0.02
  },
  message: {
    textAlign: 'center',
    width: Window_width * 0.45,
    height: Window_height * 0.07, 
    backgroundColor: '#FFFFFF',
    padding: Window_height * 0.02
  },
  menu2: {
    flexDirection: 'row',
    width: Window_width * 0.9,
    height: Window_height * 0.07,
    alignItems: 'center',
    marginLeft: 20,
  },
  network: {
    textAlign: 'center',
    width: Window_width * 0.45,
    height: Window_height * 0.07,
    backgroundColor: '#A0A0A0',
    padding: Window_height * 0.02
  },
  program: {
    textAlign: 'center',
    width: Window_width * 0.45,
    height: Window_height * 0.07, 
    backgroundColor: '#FFFFFF',
    padding: Window_height * 0.02
  },
  menu3: {
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    width: Window_width * 0.6,
    height: Window_height * 0.05,
    alignItems: 'center',
    marginLeft: 80,
    marginBottom: 10,
    position: 'relative',
    bottom: Window_height * 0.045
  },
  seat: {
    textAlign: 'center',
    width: Window_width * 0.3,
    height: Window_height * 0.05,
    backgroundColor: '#FFFFFF',
    padding: Window_height * 0.01
  },
  user: {
    textAlign: 'center',
    width: Window_width * 0.3,
    height: Window_height * 0.05,
    padding: Window_height * 0.01
  },
  modalView: {
    height: Window_height * 0.65,
    width: Window_width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  closebtn: {
    position: 'relative',
    textAlign: 'center',
    top: Window_height * 0.03,
    left: 130,
  },
  cctvlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    bottom: Window_height * 0.03,
  },
  cctvitem: {
    position: 'relative',
    width: Window_width * 0.39,
    height: Window_height * 0.25,
    backgroundColor: '#000000',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0.5,
  },
  cctvtext: {
    color: '#FFFFFF',
    fontSize: 24,
    paddingTop: Window_height * 0.1,
    bottom: 15,
  }
});

export default Manager_HeaderStyles;