import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  texto: {
    color: 'white',
    textAlign: 'right',
    fontSize: 60,
    marginBottom: 10,
  },
  textoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
    
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '300',
    color : 'white',
    fontSize: 30,
  },
});
