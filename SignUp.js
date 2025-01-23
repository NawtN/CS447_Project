import React, { useState } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { authentication, database } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';




export default function SignUp({ navigation }) {
    const [isVisbile, setVisbile] = useState(true);
    const [userAuth, setuserAuth] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = userAuth;
    const uid = uuid.v4()
    const uAccount = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(() => {
                navigation.navigate('HomeTabs')

                setDoc(doc(database, "users", uid), {
                    username: name,
                    email: email,
                    id: authentication.currentUser.uid
                });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('sorry the email is already in use');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    };
    //const nav = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ScrollView style={{ flex: 1, paddingTop: 30 }}>

                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500' }}>
                        Sign Up
                    </Text>


                    <Text style={styles.text}>Name</Text>

                    <TextInput
                        value={name}
                        maxLength={10}
                        onChangeText={(val) => {
                            setuserAuth({ ...userAuth, name: val })
                        }}

                        keyboardType='name-phone-pad'

                        style={styles.textInput}
                    />

                    <Text style={styles.text}>Email</Text>

                    <TextInput
                        value={email}
                        onChangeText={(val) => {
                            setuserAuth({ ...userAuth, email: val })
                        }}
                        keyboardType='email-address'
                        style={styles.textInput}
                    />

                    <Text style={styles.text}>Password</Text>

                    <View style={styles.container} >
                        <TextInput
                            value={password}
                            onChangeText={(val) => {
                                setuserAuth({ ...userAuth, password: val })
                            }}
                            secureTextEntry={isVisbile}
                            keyboardType='ascii-capable'
                            maxLength={10}

                            style={styles.textInput3}
                        />
                        <Ionicons onPress={() => {
                            setVisbile(!isVisbile)
                        }} name='eye-off-outline' size={24} color='black' />
                    </View>


                    <TouchableOpacity
                        onPress={uAccount}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 19, color: '#FFFFFF' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>


                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            gap: 5,
                        }}>
                        <Text style={{ fontSize: 16 }}>Already have an Account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('LogIn')
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: '#0789E8',
                                    fontWeight: "600",
                                }}>
                                logIn
                            </Text>
                        </TouchableOpacity>
                    </View>








                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "500",

        marginTop: 40,
    },
    textInput: {
        borderColor: "#E3E3E3",
        borderBottomWidth: 2,
        fontSize: 16,
        marginTop: 15,

    },
    textInput3: {
        fontSize: 17,
        marginTop: 15,
        flex: 0.9
    },
    container: {
        borderColor: "#E3E3E3",
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    button: {
        backgroundColor: '#0789E8',
        marginTop: 30,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

