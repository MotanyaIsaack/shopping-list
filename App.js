/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '001', text: 'Milk'},
    {id: '002', text: 'Eggs'},
    {id: '003', text: 'Bread'},
    {id: '004', text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter a shopping item',
        [{text: 'Ok', onPress: () => console.log('Pressed')}],
        {cancelable: true},
      );
    } else {
      setItems((prevItems) => {
        return [{id: 'new_id', text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
