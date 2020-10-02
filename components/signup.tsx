import React from 'react';
import {StyleSheet, View ,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Signup() {
  return(
      <View style={styles.signupContainer}>
          <Text style={styles.signupheading}>SIGNUP HERE</Text>
      </View>
  )
};
const styles = StyleSheet.create({
    signupContainer:{
    
      flex:1,
      flexDirection:"row",
        width: 120,
        height: 12,
        alignSelf:'center',
        top:hp('10%')
       
    },
    signupheading:{
        fontWeight:'bold',
        fontSize:12,
        letterSpacing:2,
        lineHeight:15,
        color: "#001727"
    }
  
  });