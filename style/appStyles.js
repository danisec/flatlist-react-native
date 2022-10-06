import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 20,
  },

  SafeAreaView: {
    flex: 1,
  },

  header: {
    backgroundColor: '#F1F1F1',
    padding: 10,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    borderRadius: 10,
  },

  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  itemText: {
    paddingLeft: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
