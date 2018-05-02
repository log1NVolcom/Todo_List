import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 24,
    backgroundColor: '#13293d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#e8f1f2',
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
  },
  logo: {
    paddingTop: 24,
    height: 85,
    width: '100%',
  },
});

export default styles;
