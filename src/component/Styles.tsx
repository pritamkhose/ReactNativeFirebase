import {StyleSheet} from 'react-native';
import colorTheme from './ColorTheme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  screenView: {
    height: height,
    width: width,
    flex: 0,
    backgroundColor: colorTheme.white,
  },
  buttonMargin: {
    marginBottom: 8,
    paddingBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerItemLine: {
    borderBottomColor: colorTheme.primaryColor,
    borderBottomWidth: 1,
  },
  drawerIconSize: {
    height: 100,
    width: '100%',
  },
  drawerMenuIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
  },
  drawerPaddingMarging: {
    paddingRight: 8,
    margin: 8,
  },
  iconHeader: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonActionSave: {
    backgroundColor: 'limegreen',
    marginVertical: 4,
  },
  buttonActionDelete: {
    backgroundColor: 'red',
    marginVertical: 4,
  },
  buttonActionSubmit: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colorTheme.primaryColor,
    margin: 12,
  },
  buttonActionCancel: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colorTheme.grey,
    margin: 12,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
  },
  loginText: {
    color: colorTheme.primaryColor,
    marginHorizontal: 12,
  },
  loginTextError: {
    color: 'red',
    marginHorizontal: 12,
    textAlign: 'right',
  },
  modalTextRed: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
  cardView: {
    marginTop: 2,
    marginHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    elevation: 4,
  },
  cardViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardViewHeader: {
    marginTop: 2,
    marginHorizontal: 4,
    backgroundColor: colorTheme.primaryColor,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    elevation: 4,
  },
  textHeaderTitle: {
    fontSize: 16,
    color: 'black',
    fontStyle: 'italic',
  },
  textCart: {
    margin: 4,
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
