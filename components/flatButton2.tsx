import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function FlatButton2(){

    return(
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
          </View>  
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({

    button:{
        borderRadius:10,
        paddingVertical:14,
        paddingHorizontal:10,
        height:47,
        width:293,
        alignSelf:"center",
        borderColor:'#D9183B',
        borderWidth:1,
       top:hp('5%')
    },

    buttonText:{
        color:'#D9183B',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign:'center'

                }
})