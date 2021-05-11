import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

const CustomButton2 = (props) =>{
    return(
        <>
        <View style = {styles.container}>
            <TouchableOpacity 
            onPress={()=> props.onPress() }
            style = {styles.button}>
                <Text style = {styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
export default CustomButton2;
const styles = StyleSheet.create({
    container:{
        padding:15

    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        color:'#fff'

    }
})