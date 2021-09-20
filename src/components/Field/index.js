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
                value={precoKg}
                onChangeText={(text)=>{setPrecoKg(text)}}
                    
                
                
                />
            <Text style={style.example}>{example}</Text>
            <Text>{precoKg}</Text>
            <Text>{typeof(precoKg)}</Text>
            <Text>{precoKg * "2"}</Text>
        </View>
    );
};


export default Field;