import React, { useEffect } from 'react';
import {View, ActivityIndicator, Image } from 'react-native';
import style from './style';

const Preload = ({navigation}) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate("Home");
        },2000)
        return () => clearTimeout(timer);
    },[])

    return (
            <View style={style.containerPreload}>
                <Image source={require('../assets/images/image_preload.png')} style={style.image_preload}/>
                <ActivityIndicator size="large" color="green" />
            </View>
    );
}

export default Preload;