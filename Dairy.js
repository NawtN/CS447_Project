import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dairy() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const dairyProducts = [
    { id: '1', name: 'Milk', image: require('./assets/dairys/millk.png') },
    { id: '2', name: 'Laban', image: require('./assets/dairys/laban.png') },
    { id: '3', name: 'Butter', image: require('./assets/dairys/buuter.png') },
    { id: '4', name: 'Yogurt', image: require('./assets/dairys/yogurt.png') },
    { id: '5', name: 'Cheddar', image: require('./assets/dairys/cheddar.png') },
    { id: '6', name: 'Halloumi', image: require('./assets/dairys/hllomi.png') },
  ];

  const filteredDairy = dairyProducts.filter(dairy =>
    dairy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dairy</Text>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/magnifying-icon.png')} style={styles.magnifyingGlass} />
        <TextInput
          style={styles.searchBar}
          placeholder="search..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      {filteredDairy.length > 0 ? (
        <View style={styles.gridContainer}>
          {filteredDairy.map((item) => (
            <TouchableOpacity key={item.id} style={styles.button} onPress={() => navigation.navigate('List', { itemName: item.name })}>
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