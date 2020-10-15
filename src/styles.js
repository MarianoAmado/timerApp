import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  time: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#adadad',
  },
  btnTxt: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnR: {
    backgroundColor: '#e63c39',
  },
  btnG: {
    backgroundColor: '#12d055',
  },
  btnB: {
    backgroundColor: '#1B95E0',
  },
});

export default styles;
