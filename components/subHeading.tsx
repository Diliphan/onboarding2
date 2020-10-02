import React from 'react';
import {StyleSheet, View ,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function SubHeading() {
  return(
      <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>your company name</Text>
      </View>
  )
};
const styles = StyleSheet.create({
    subheadingContainer:{
        flex:1,
        position:"absolute",
        width:150,
        height:15,
        alignSelf:'center',
        top:hp('56%')
       
    },
    subheading:{
        fontWeight:'bold',
        fontSize:12,
        letterSpacing:2,
        lineHeight:15,
        color: "black"
    }
  
  });