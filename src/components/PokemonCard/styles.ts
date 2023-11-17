import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        width: "90%",
        height: "90%",
        borderWidth: 15,
        borderColor: "#fbd803",
        padding: 20,
        borderRadius: 10,

    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    textPokemonName: {
        textTransform: 'capitalize',
        fontSize: RFValue(30),
        resizeMode: 'contain'
    },
    containerHp: {
        flexDirection: 'row',
        alignItems:'baseline'
    },
    textPokemonHp: {
        textTransform: 'uppercase',
        resizeMode: 'contain'
    },
    textPokemonNumber: {
        fontSize: RFValue(30),
        resizeMode: 'contain'
    },
    containerPokemon: {
        borderWidth: 5,
        borderColor: "#707070",
        width: "100%",
        height: "50%",
        justifyContent: 'center',
    },
    imgPokemon: {
        alignSelf: 'center',
        width: "100%",
        height: "100%",        
        resizeMode: 'contain'

    },
    
    containerHabilidades: {
        alignItems: "flex-start",
        width: "98%",
        paddingTop: "4%"
    },
    containerSkill: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderBottomWidth:1,
        borderBottomColor:"black",
        resizeMode: 'contain',
    },
    containerText:{
        flexDirection: 'row',
    },
    textHabilidades: {
        fontSize: RFValue(20),
        paddingLeft: '2%',
        resizeMode: 'contain'
    },
    
    valor: {
        fontSize: RFValue(25),
        resizeMode: 'contain'
    },
    containerType:{
        height:"12%",
        width: "100%",
        resizeMode: 'contain',
        justifyContent:'flex-end'
    },

    textPokemonType: {
        fontSize: RFValue(30),
        textTransform: 'capitalize',
        resizeMode: 'contain'
    },
})