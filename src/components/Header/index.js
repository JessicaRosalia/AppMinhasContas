import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './style';

import foto from '../../assets/images/logo.png';

const Header = () => {
    return (
        <View style={style.container_header}>
            <Image source={foto}/>
            <Text style={style.text_header}>App Minhas Contas</Text>
        </View>
    )
};

export default Header;