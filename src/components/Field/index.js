import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';


import style from './style';

const Field = (props)=>{
    const {children, example, width, marginBottom, precoKg, setPrecoKg} = props;
    
    

    return (
        <View style={style.container_field} marginBottom={marginBottom || 50} >
            <Text style={style.label}>{children}</Text>
            <TextInput 
                style={style.input} 
                keyboardType="numeric" 
                width={width || 306} 
                //value={precoKg}
                onChangeText={(text)=>{setPrecoKg(text)}}
                />
        </View>
    );
};


export default Field;