import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Breadcrumb from '../components/Breadcrumb';
import DataScreen from './DataScreen';

import style from './style';

const ResultScreen = ({route}) => {
    const precoKg = route.params.precoKg;
    const qtdpesadas1 = route.params.qtdpesadas1;

    const qtdpesadas15 = route.params.qtdpesadas15;
    const tt = route.params.totality;
    
    function soma(){
        return <Text> {(precoKg * parseFloat(qtdpesadas1)) + ((precoKg + precoKg/2) * parseFloat(qtdpesadas15))}</Text>
    }
    
    return (
        <SafeAreaView  style={style.container_p}>
            <ScrollView>
                <View>
                    <View style={style.container_breadcrum}>
                        <Breadcrumb step="1" activated={true}>Preço do kg</Breadcrumb>
                        <Breadcrumb step="2" activated={true}>Dados</Breadcrumb>
                        <Breadcrumb step="3" activated={true}>Resultado</Breadcrumb>
                    </View>

                    <View style={style.result}>
                        <Text>RESULTADO: { totality } </Text>
                        {console.warn(precoKg,qtdpesadas1,qtdpesadas15)}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ResultScreen;