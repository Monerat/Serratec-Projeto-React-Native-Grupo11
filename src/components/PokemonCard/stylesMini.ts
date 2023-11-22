import { StyleSheet } from 'react-native'

export const stylesMini = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
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
        fontSize: 14,
        
    },
    containerHp: {
        flexDirection: 'row',
        alignItems:'baseline'
    },
    textPokemonHp: {
        fontSize: 10,
        textTransform: 'uppercase',
       
    },
    textPokemonNumber: {
        fontSize: 14,
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
        width: "100%",
        paddingTop: "4%"
    },
    containerSkill: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor:"black",
    },
    containerText:{
        flexDirection: 'row',
    },
    textHabilidades: {
        fontSize: 10,
        paddingLeft: '2%',
    },
    
    valor: {
        fontSize: 10,
    },
    containerType:{
        height:"18%",
        width: "100%",
        resizeMode: 'contain',
        justifyContent:'flex-end'
    },

    textPokemonType: {
        fontSize: 10,
        textTransform: 'capitalize',
    },
})