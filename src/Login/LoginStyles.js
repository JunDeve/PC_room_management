import { StyleSheet, Dimensions } from 'react-native';

const Window_width = Dimensions.get("window").width;
const Window_height = Dimensions.get("window").height;

const HeaderStyles = StyleSheet.create({
    top: {
        alignItems: 'center',    
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
        paddingHorizontal: Window_width * 0.37,
        margin: 5,
        borderRadius: 10,
    },
    signin: {
        backgroundColor: '#A0A0A0',
        padding: 10,
        paddingHorizontal: Window_width * 0.37,
        margin: 5,
        textAlign: 'center',
    },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot:{
    marginLeft: 'auto',
    marginRight: Window_width * 0.05,
  }
});

export default HeaderStyles;