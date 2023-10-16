import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
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
});

export default HeaderStyles;