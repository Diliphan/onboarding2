import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function FlatButton1(){

    return(
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN WITH EMAIL</Text>
          </View>  
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({

    button:{
        borderRadius:10,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#D9183B',
        height:47,
        width:293,
        alignSelf:"center",
       top:hp('5%')
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign:'center',
        

                }
})