import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function Profile({ navigation }) {
  
  const [user, setUser] = useState({
    name: 'your name',
    email: '@example.com',
    password: '******', 
    profileImage: require('./assets/icon.png'), 
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState(user.password);
  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = () => {
    setUser({
      ...user,
      name: newName,
      email: newEmail,
      password: newPassword,
    });
    setIsEditing(false);
    Alert.alert('Profile updated successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBackground}>
          <Text style={styles.name}>{user.name}</Text>
          <Image source={user.profileImage} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
          <Image source={require('./assets/icon.png')} style={styles.icon} />
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
          ) : (
            <View>
              <Text style={styles.label}>Username:</Text>
              <Text style={styles.info}>{user.name}</Text>
            </View>
          )}
        </View>
        <View style={styles.infoRow}>
          <Image source={require('./assets/icon.png')} style={styles.icon} />
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
            />
          ) : (
            <View>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.info}>{user.email}</Text>
            </View>
          )}
        </View>
        <View style={styles.infoRow}>
          <Image source={require('./assets/icon.png')} style={styles.icon} />
          {isEditing ? (
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.label}>Password:</Text>
              <Text style={styles.info}>******</Text>
            </View>
          )}
        </View>
       
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          if (isEditing) {
            handleEdit();
          } else {
            setIsEditing(true);
          }
        }}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faf9f6',
  },
  header: {
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#e3dac9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackground: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#faf9f6',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: '80%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 20,
  },
  editButton: {
    backgroundColor: '#e3dac9',
    padding: 10,
    borderRadius: 10,
    width: '48%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#faf9f6',
    fontSize: 16,
  },
});