import React from 'react';
import styles from './style/appStyles';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';

const API = 'https://randomuser.me/api/?results=20';

const App = () => {
  const [data, setData] = React.useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  console.log(data);

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.itemFlex}>
          <Image
            style={styles.itemImage}
            source={{uri: item.picture.thumbnail}}
          />
        </View>

        <View style={styles.itemText}>
          <Text style={styles.title}>
            {`${item.name.title} ${item.name.first} ${item.name.last}`}
          </Text>

          <Text>
            {`${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.state}`}
          </Text>

          <Text>{item.email}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Customers</Text>
      </View>

      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.email}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
