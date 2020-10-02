import React from 'react';
import {View,StyleSheet} from 'react-native';


import OnboardingAnimation from '../components/onboarding_animation'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import FlatButton1 from '../components/flatButton1'
import FlatButton2 from '../components/flatButton2'
import Signup from '../components/signup'


export default function App() {
  return(
      <View style={styles.container}>
    <OnboardingAnimation/>
    <Heading/>
    <SubHeading/>
    <View style={styles.button1}>
    <FlatButton1 /> 
    </View>
    <View style={styles.button2}>
    <FlatButton2 />
    </View>
  <Signup/>
    </View>
)
};

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  button1:{
      paddingTop:10
  },
  button2:{
    marginTop:30
}
  
  });