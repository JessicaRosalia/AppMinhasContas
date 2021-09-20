import React, {useState} from 'react' ;
import {Button, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Breadcrumb from '../components/Breadcrumb';
import Field from '../components/Field';

import style from './style';

const DataScreen = ({navigation, route}) => {

  const [qtdPesadas1, setQtdPesadas1] = useState(1);
  const [qtdPesadas15, setQtdPesadas15] = useState(1);
  const [qtdPesadas2, setQtdPesadas2] = useState(1);
  const [qtdPesadas25, setQtdPesadas25] = useState(1);
  const [qtdPesadas3, setQtdPesadas3] = useState(1);
  const [qtdPesadas35, setQtdPesadas35] = useState(1);
  const [qtdPesadas4, setQtdPesadas4] = useState(1);
  const [qtdPesadas45, setQtdPesadas45] = useState(1);
  const [qtdPesadas5, setQtdPesadas5] = useState(1);
  const [qtdPesadas55, setQtdPesadas55] = useState(1);
  const [qtdPesadas6, setQtdPesadas6] = useState(1);


  const precoKg = route.params.preco;

    function totality (){
       
      switch (precoKg) {
        case qtdPesadas1:
          setQtdPesadas1(precoKg * qtdPesadas1);
          break;
        case qtdPesadas15:
          setQtdPesadas15((precoKg + (precoKg/2)) * qtdPesadas15);
          break;
        case qtdPesadas2:
          (precoKg *2) * qtdPesadas2;
          break; 
        case qtdPesadas25:
          ((precoKg *2) + (precoKg/2)) * qtdPesadas25;
          break; 
        case qtdPesadas3:
          (precoKg*3) * qtdPesadas3;
          break; 
        case qtdPesadas35:
          ((precoKg *3) + (precoKg/2)) * qtdPesadas35;
          break; 
          
        default:
          break;
      }
  }

  totality();


    return (
        <SafeAreaView style={style.container_p}>
          <ScrollView>
            <View>

              <View style={style.container_breadcrum}>
                <Breadcrumb step="1" activated={true}>Preço do kg</Breadcrumb>
                <Breadcrumb step="2" activated={true}>Dados</Breadcrumb>
                <Breadcrumb step="3" activated={false}>Resultado</Breadcrumb>
              </View>

              <View style={style.container_principal}>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas1} setPrecoKg={setQtdPesadas1}>Quantidade de pesadas de 1kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas15} setPrecoKg={setQtdPesadas15}>Quantidade de pesadas de 1,5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas2} setPrecoKg={setQtdPesadas2}>Quantidade de pesadas de 2kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas25} setPrecoKg={setQtdPesadas25}>Quantidade de pesadas de 2,5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas3} setPrecoKg={setQtdPesadas3}>Quantidade de pesadas de 3kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas35} setPrecoKg={setQtdPesadas35}>Quantidade de pesadas de 3,5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas4} setPrecoKg={setQtdPesadas4}>Quantidade de pesadas de 4kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas45} setPrecoKg={setQtdPesadas45}>Quantidade de pesadas de 4,5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas5} setPrecoKg={setQtdPesadas5}>Quantidade de pesadas de 5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas55} setPrecoKg={setQtdPesadas55}>Quantidade de pesadas de 5,5kg:</Field>
                <Field example={"Exemplo: 11"} width={80} precoKg={qtdPesadas6} setPrecoKg={setQtdPesadas6}>Quantidade de pesadas de 6kg:</Field>
              
                <View style={style.buttonStep2}>
                  <Button
                    key="33"
                    title="Ir para calctttt"
               
                   
                    onPress={function (){
                       navigation.navigate('Result',{precoKg: precoKg, qtdpesadas1: qtdPesadas1, qtdpesadas15: qtdPesadas15})}
                    }
                    
                    />
                </View>

              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
    )
};

const styleBTN = StyleSheet.create ({
  colorBTN: {
    color: '#fff',
    marginTop: 1000,
  }
})

export default DataScreen;