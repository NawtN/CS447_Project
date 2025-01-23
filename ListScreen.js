import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

export default function ListScreen({ route }) {
  const { itemName } = route.params;
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    setItems((prevItems) => [...prevItems, name]);
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearList = () => {
    setItems([]);
  };

  // Add the item when the component mounts
  React.useEffect(() => {
    if (itemName) {
      addItem(itemName);
    }
  }, [itemName]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item List</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteItem(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {items.length > 0 && (
        <Button title="Clear List" onPress={clearList} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#faf9f6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
  },
});