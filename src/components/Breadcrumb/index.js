import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const Breadcrumb = (props) =>{
    return (
        
        <View style={style.container_breadcrum}>
        {props.activated
            ? <>
                <Text style={style.step_indicator}>{props.step}</Text>
                <Text style={style.step_text}>{props.children}</Text> 
              </>
        
           :<>
                <Text style={ style.step_indicator_false}>{props.step}</Text>
                <Text style={style.step_text_false}>{props.children}</Text> 
            </>
        } 
        </View>
    )
}

export default Breadcrumb;