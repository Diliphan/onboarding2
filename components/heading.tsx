import React from 'react';
import {StyleSheet, View ,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Heading() {
  return(
      <View style={styles.headingContainer}>
          <Text style={styles.heading}>e-learn</Text>
      </View>
  )
};
const styles = StyleSheet.create({
    headingContainer:{
        flex:1,
        position:"absolute",
        width:220,
        height:78,
        alignSelf:'center',
        top:hp('45%')
    },
    heading:{
        fontWeight:'900',
        fontSize:64,
        letterSpacing:2,
        lineHeight:78,
        color:'black'


    }
  
  });