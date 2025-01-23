import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';


export default function AnimationScreen({navigation}) {
    const animationRef = useRef(null);
   

    useEffect(() => {
        animationRef.current?.play();


       setTimeout(() => {
        navigation.replace('SignUp');
       }, 2000);
    }, []);

    return (
        <LottieView
            ref={animationRef}
            source={require("./assets/animation/cart.json")}
            style={{ width: "100%", height: "100%" }}
        />
    );
}