import { Children } from "react";
import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container_breadcrum: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        paddingTop: 25,
        paddingBottom: 45,

    },
    step_indicator: {
        backgroundColor: '#2DABFF',
        color: '#fff',
        width: 19,
        height: 19,
        borderRadius: 9.5,
        textAlign: 'center',
        marginRight: 5,
    },
    step_indicator_false: {
        backgroundColor: "#c4c4c4",
        color: "#fff",
        width: 19,
        height: 19,
        borderRadius: 9.5,
        textAlign: 'center',
        marginRight: 5,
    },
    step_text: {
        color: '#2DABFF',
    },
    step_text_false: {
        color: '#c4c4c4',
    }

})

export default style;