import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      const { data } = await Contacts.getContactsAsync();
      // console.log(data);
      setContacts(data);
    };
    getContacts();
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item.name}</Text>
  )

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text>Contacts</Text>
        </View>
        <View>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'red',
    marginTop: 100,
  }
});
