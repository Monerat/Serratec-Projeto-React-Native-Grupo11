import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        height: 100,
        width:'100%',
        backgroundColor: '#1f1e25',
        borderRadius: 20,
        padding: 5
    },
    headerContainer: {
        height: "30%",
        width: "100%",
        justifyContent: 'center',
        marginBottom: "2%"
    },
    txtWin: {
        fontSize: 25,
        color: 'green'
    },
    txtLoss: {
        fontSize: 25,
        color: 'red'
    },
    deckContainer: {
        height: "70%",
        width: "100%",
        justifyContent: 'center',
    },
    pokeMiniature: {
        height: 50,
        width: 50
    }
})