import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Fruits() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fruits = [
    { id: '1', name: 'Apple', image: require('./assets/fruits/apple.png') },
    { id: '2', name: 'Banana', image: require('./assets/fruits/banana.png') },
    { id: '3', name: 'Orange', image: require('./assets/fruits/orang.png') },
    { id: '4', name: 'Cherry', image: require('./assets/fruits/chhry.png') },
    { id: '5', name: 'Mango', image: require('./assets/fruits/mango.png') },
    { id: '6', name: 'Strawberry', image: require('./assets/fruits/strawberry.png') },
  ];

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageError = (fruitName) => {
    Alert.alert('Product Not Available', `${fruitName} is not available.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruits</Text>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/magnifying-icon.png')} style={styles.magnifyingGlass} />
        <TextInput
          style={styles.searchBar}
          placeholder="search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#e3dac9" />
      ) : filteredFruits.length > 0 ? (
        <View style={styles.gridContainer}>
          {filteredFruits.map((item) => (
            <TouchableOpacity key={item.id} style={styles.button} onPress={() => navigation.navigate('List', { itemName: item.name })}>
              <Image
                source={item.image}
                style={styles.image}
                onError={() => handleImageError(item.name)}
              />
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
    color: '#e3dac9',
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