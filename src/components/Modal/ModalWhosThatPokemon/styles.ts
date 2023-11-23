import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
    },
    containerHeader: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: {
        alignItems: 'center',
        width: '100%',
        height: '33%',
    },
    imageLogo: {
        width: "60%",
    },
    spriteImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    pokemonTextStyle: {
        color: '#FDB542',
        fontSize: 50,
        textShadowColor: '#3560ad',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 1,
        textTransform: 'capitalize',
        overflow: 'hidden',
    },
    modalTextContainer: {
        width: '100%',
        alignItems: 'center'
    }
})

export default styles;