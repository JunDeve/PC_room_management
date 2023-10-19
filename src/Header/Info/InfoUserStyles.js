import { StyleSheet } from 'react-native';

const InfoUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    color: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default InfoUserStyles;
