import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
  },
  main: {
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
  },
  textInput: {
    backgroundColor: '#e8f1f2',
    height: '75%',
    marginTop: 0,
    paddingTop: 0,
    textAlignVertical: 'top', // hack android
    marginBottom: 20,
    fontSize: 18,
  },
  textInputLabel: {
    color: '#e8f1f2',
    fontSize: 20,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
});

export default styles;
