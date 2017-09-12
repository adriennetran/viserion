import { Dimensions, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222A3C',
    // padding: 10,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 10,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#060E22',
  },
  mainContainer: {
    flex: 2,
    paddingVertical: 10,
  },
  footerContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#bbb'
  },

  // Keywords
  keyword: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 5,
  },
  keywordsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  keywordSelected: {
    backgroundColor: '#3D6DF9',
  },
  keywordText: {
    fontSize: 16,
    color: '#fff',
  },

  screenWidth: {
    width: Dimensions.get('window').width,
  },

  // Typography
  text: {
    fontFamily: 'Avenir-Book',
    color: '#fff'
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 32,
    lineHeight: 35,
  },
  subtitle: {
    fontSize: 20,
    color: '#d0d0d0',
  },
  muted: {
    color: '#aaa'
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: '#fff'
  },

  // Modals
  modal: {
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  innerModal: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    position: 'relative',
    top: '5%',
    borderRadius: 10,
  },
  form: {
    padding: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },

  // Color Palette
  circleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  circle: {
    height: (Dimensions.get('window').width / 3) - 20,
    width: (Dimensions.get('window').width / 3) - 20,
    borderRadius: 200,
    margin: 5,

  },

  // Buttons
  absoluteBottom: {
    position: 'absolute',
    bottom: 10,
    right: (Dimensions.get('window').width / 3), // center
  },
  absoluteRight: {
    position: 'absolute',
    top: 100,
    right: 0,
  },
  sideButton: {
    width: 50,
    height: 50,
    backgroundColor: '#222A3C',

  },
  buttonCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 1,
    paddingTop: 2,
  },
  addButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: "#000000",
  },

  // Grids
  itemsColumn: {
    flexDirection: 'column',
  },
  boxItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#eee',
    margin: 1,
    padding: 10,
  },
  continueButton: {
    backgroundColor: '#3E84FB',
    borderRadius: 30,
    width: 110,
    height: 35,
  },
});