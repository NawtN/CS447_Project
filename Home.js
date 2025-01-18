import React from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';

const Home = () => {

  return(

    <View style={styles.firstView}> 
     
      <Text style={styles.TextStyle}>Welcom to CS 447 <Text style={{fontWeight:'300',color:'#fff'}}>React-Native</Text></Text>
    </View>

  );
}

const styles = StyleSheet.create({
 firstView:{
  flex:1,
      backgroundColor:'#BABDBB',
      justifyContent:'space-around',
     alignItems:'center',
      flexDirection:'row' //defulte
},
});
export default Home;