import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Breadcrumb from '../components/Breadcrumb';
import DataScreen from './DataScreen';

import style from './style';

const ResultScreen = ({navigation, route}) => {
    let precoKg = route.params.precoKg;
    let qtdpesadas1 = route.params.qtdpesadas1;
    let qtdpesadas15 = route.params.qtdpesadas15;
    let qtdpesadas2 = route.params.qtdpesadas2;
    {/*let qtdpesadas25 = route.params.qtdpesadas25;
    let qtdpesadas3 = route.params.qtdpesadas3;
    const qtdpesadas35 = route.params.qtdpesadas35;
    const qtdpesadas4 = route.params.qtdpesadas4;
    const qtdpesadas45 = route.params.qtdpesadas45;
    const qtdpesadas5 = route.params.qtdpesadas5;
    let qtdpesadas55 = route.params.qtdpesadas55;
let qtdpesadas6 = route.params.qtdpesadas6; */}
    
    const [totalSoma, setTotalSoma] = useState(0);

  
        let valorKg = parseFloat(precoKg)
        let meioKg = parseFloat(precoKg) + 2;
        let totalPesadas1kg = valorKg * qtdpesadas1;
        let totalPesadas15kg = meioKg * qtdpesadas15;
        let totalPesadas2kg = parseFloat(valorKg * 2) * qtdpesadas2;
       /* let totalPesadas25kg = ((valorKg * 2) + meioKg) * qtdpesadas25;
        let totalPesadas3kg = (valorKg * 3)* qtdpesadas3;
        let totalPesadas35kg = ((valorKg * 3) + meioKg) * qtdpesadas35;
        let totalPesadas4kg = (valorKg * 4) * qtdpesadas4;        
        let totalPesadas45kg = ((valorKg * 4)+ meioKg)* qtdpesadas45;        
        let totalPesadas5kg = ((valorKg * 5)+ meioKg)* qtdpesadas5;
        let totalPesadas55kg = ((valorKg * 5) + meioKg)* qtdpesadas55;
        let totalPesadas6kg = (valorKg * 6)* qtdpesadas6;
        
        //let totalSomab = totalPesadas1kg + totalPesadas15kg + totalPesadas2kg + totalPesadas25kg + totalPesadas3kg + totalPesadas35kg
        setTotalSoma( totalPesadas1kg + totalPesadas15kg + totalPesadas2kg) */
        
        //return <Text> {  totalSoma }</Text>
    
    
    return (
        <SafeAreaView  style={style.container_p}>
            <ScrollView>
                <View>
                    <View style={style.container_breadcrum}>
                        <Breadcrumb step="1" activated={true}>Preço do kg</Breadcrumb>
                        <Breadcrumb step="2" activated={true}>Dados</Breadcrumb>
                        <Breadcrumb step="3" activated={true}>Resultado</Breadcrumb>
                    </View>

                    <View>
                        <Text>RESULTADO: { parseFloat(totalPesadas2kg)}</Text>
                        {console.warn(precoKg,qtdpesadas1,qtdpesadas15)}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ResultScreen;