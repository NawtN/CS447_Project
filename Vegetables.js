import * as React from 'react';
import { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Vegetables() {
  const [searchTerm, setSearchTerm] = useState('');


  const fruits = [
    { id: '1', name: 'tomato', image: require('./assets/icon.png') },
    { id: '2', name: 'potato', image: require('./assets/icon.png') },
    { id: '3', name: 'carrot', image: require('./assets/icon.png') },
    { id: '4', name: 'onion', image: require('./assets/icon.png') },
  ];

  // Filter products based on search text
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vegetables</Text>

      {/* Search bar with magnifying glass image*/}
      <View style={styles.searchContainer}>
        <Image 
          source={require('./assets/magnifying-icon.png')} 
          style={styles.magnifyingGlass}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Show filtered products*/}
      {filteredFruits.length > 0 ? (
        <View style={styles.gridContainer}>
          {filteredFruits.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.button} 
              onPress={() => alert(`You selected ${item.name}`)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={styles.noResultsText}>No matching results found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#e3dac9',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', 
    marginBottom: 20,
  },
  magnifyingGlass: {
    width: 30, 
    height: 30, 
    marginRight: 5, 
  },
  searchBar: {
    height: 40,
    borderColor: '#e3dac9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1, 
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#e3dac9',
    padding: 15,
    borderRadius: 5,
    width: '48%', 
    alignItems: 'center',
    marginVertical: 25,
    elevation: 10, 
  },
  image: {
    width: 70, 
    height: 70, 
    marginBottom: 5, 
  },
  buttonText: {
    color: '#000', 
    fontSize: 16,
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
