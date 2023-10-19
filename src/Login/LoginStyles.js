import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;

const HeaderStyles = StyleSheet.create({
  all: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    transform: [{ scale: 0.9 }],
    justifyContent: 'center',
    top: 0,
    left: 0,
  },
  top: {
    alignItems: 'center',
    top: -20
  },
  signtext: {
    fontSize: 20,
    margin: 10,
  },
  image: {
    margin: 10,
  },
  inputbox: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    paddingHorizontal: Window_width * 0.365,
    margin: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  signin: {
    backgroundColor: '#A0A0A0',
    padding: 10,
    paddingHorizontal: Window_width * 0.3725,
    margin: 5,
    textAlign: 'center',
    width: '88%',
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -20,
  },
  forgot: {
    marginLeft: 'auto',
    marginRight: Window_width * 0.05,
  },
});

export default HeaderStyles;