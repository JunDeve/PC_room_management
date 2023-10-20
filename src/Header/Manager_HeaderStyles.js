import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;

const Manager_HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A0A0A0'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    padding: 20,
    paddingHorizontal: 20,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  modalview: {
    height: Window_height * 1,
    width: Window_width * 0.5,
    justifyContent: 'flex-start',
    backgroundColor: '#2E2E2E',
  },
  modaluser: {
    marginLeft: 10,
    marginTop: 100,
  },
  modaluserimg: {
    marginBottom: 20,
  },
  modaltext: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  modaltexttime: {
    color: '#A0A0A0',
    fontSize: 15,
    marginLeft: 20,
    margin: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  modalmenutext: {
    color: '#A0A0A0',
    fontSize: 15,
    marginLeft: 20,
    margin: 10,
  },
});

export default Manager_HeaderStyles;