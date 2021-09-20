import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
const url = './../../AppW';

const BtnNextScreen = ({navigation}) => {

    function onPress (){
        navigation.navigate('')
    }
    return (
        <View>
        <TouchableOpacity style={style.btn} onPress={onPress}>
            <Text>OOI NEXT</Text>
        </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
    }
})

export default BtnNextScreen;