import React from 'react';
import LottieView from 'lottie-react-native'; 
import {StyleSheet, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class OnboardingAnimation extends React.PureComponent {
  render() {
    return (
      <View  style={styles.lottieContainer}>
      <LottieView
        source={require('../src/animation.json')}
        autoPlay
        loop
        style={styles.lottie}
     
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottieContainer:{
    alignSelf:"center",
   
  },
 lottie:{
   height:hp('60%'),
   width:wp('98%'), 
 }

});