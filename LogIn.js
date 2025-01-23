import React, { useState } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from './firebaseConfig';


export default function LogIn({ navigation }) {
    const [isVisbile, setVisbile] = useState(true);
    const [userLogin, setuserLogin] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userLogin;

    const loginUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((val) => {
                navigation.navigate('HomeTabs')


            })
            .catch(err => {
                Alert.alert("the password or the email is wrong please try again")

            });
    }

    //const nav = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ScrollView style={{ flex: 1, paddingTop: 30 }}>

                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500' }}>
                        LogIn
                    </Text>




                    <Text style={styles.text}>Email</Text>

                    <TextInput
                        value={email}
                        onChangeText={(val) => {
                            setuserLogin({ ...userLogin, email: val })
                        }}
                        keyboardType='email-address'

                        style={styles.textInput}
                    />

                    <Text style={styles.text}>Password</Text>

                    <View style={styles.container} >
                        <TextInput
                            value={password}
                            onChangeText={(val) => {
                                setuserLogin({ ...userLogin, password: val })
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
                        onPress={loginUser}
                        style={styles.button}

                    >
                        <Text style={{ fontSize: 19, color: '#FFFFFF' }}>
                            LogIn
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
                        <Text style={{ fontSize: 16 }}>Dont have an Account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: '#0789E8',
                                    fontWeight: "600",
                                }}>
                                SignUp
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

