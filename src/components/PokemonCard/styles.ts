import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        borderWidth: 15,
        borderColor: "#ffff6d",
        padding: 20
    },
    header: {
        flexDirection: "row",
        padding: 10
    },
    containerPokemon: {
        borderWidth: 5,
        borderColor: "#707070",
        width: "100%",
        height: "50%"
    },
    imgPokemon: {
        width: 200,
        height: 200,
        margin: 40,
        marginLeft: "25%",

    },
    imgBackground: {
        width: "100%",
        height: "60%",
    },
    textPokemonName: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "gillMedium"
    },
    textPokemonHp: {
        fontSize: 20,
        paddingLeft: "30%",
        paddingTop: 10,
        fontWeight: "bold"
    },
    textPokemonType: {
        fontSize: 25,
        paddingLeft: "8%",
        fontWeight: "bold"
    },
    containerHabilidades: {
        alignItems: "flex-start",
        padding: 20,
        width: "98%",
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: "#fff"
    },
    textHabilidades: {
        fontSize: 20,
        fontWeight: "bold",

    },
    containerSkill: {
        flexDirection: "row",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "space-between",

    },
    valor: {
        paddingLeft: 80,
        fontWeight: "bold",
        fontSize: 15,

    }
})