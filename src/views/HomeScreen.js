import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, View } from 'react-native';

import style from './style';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView  style={style.container_p}>
            <ScrollView>
                <View style={style.container_buttons}>
                    <Button
                        key="22"
                        title="Ir para calc"
                        color= '#2DABFF'
                        fontWeight='bold'
                        onPress={()=> navigation.navigate('CalcBills')}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
