import React, {useState} from 'react' ;
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Field from '../components/Field';


import style from './style';

const calcBills = ({navigation}) => {

  const [precoKg, setPrecoKg] = useState(0);

    return (
        <SafeAreaView  style={style.container_p}>
        <ScrollView>
          <View>
            <View style={style.container_breadcrum}>
              <Breadcrumb step="1" activated={true}>Preço do kg</Breadcrumb>
              <Breadcrumb step="2" activated={false}>Dados</Breadcrumb>
              <Breadcrumb step="3" activated={false}>Resultado</Breadcrumb>
            </View>

            <View style={style.container_principal}>
              <Field example={"Exemplo: 17,00"} marginBottom={200} precoKg={precoKg} setPrecoKg={setPrecoKg}>Informe o preço de 1kg de carne:</Field>
              <Button 
                title="Ir para próxima etapa"
                color= '#2DABFF'
                fontWeight='bold'
                //key="1"
                
                onPress={()=> navigation.navigate('Data', {preco: precoKg})}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
};

export default calcBills;
 
 