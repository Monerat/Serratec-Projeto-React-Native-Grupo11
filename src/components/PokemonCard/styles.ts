import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055'
    },
	modalContainer: {
        backgroundColor: '#121000',
        borderRadius: 20,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        maxHeight: "80%",
    },
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
        fontSize: 30,
    },
    containerHp: {
        flexDirection: 'row',
        alignItems:'baseline'
    },
    textPokemonHp: {
        textTransform: 'uppercase',
    },
    textPokemonNumber: {
        fontSize: 30,
    },
    containerPokemon: {
        borderWidth: 5,
        borderColor: "#707070",
        width: "100%",
        height: "48%",
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
        fontSize: 20,
        paddingLeft: '2%',
    },
    
    valor: {
        fontSize: 25,
    },
    containerType:{
        height:"19%",
        width: "100%",
        resizeMode: 'contain',
        justifyContent:'flex-end'
    },

    textPokemonType: {
        fontSize: 30,
        textTransform: 'capitalize',
    },
})