import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#26326B',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
	title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    batalharContainer:{
        height: '20%',
        width: "100%",
        justifyContent: 'center',
        alignItems:'center'
    },

    buttonBatalhar:{
        height: '50%',
        width: "60%",
        backgroundColor: '#E04A49',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 40,
        color:'#fff'
    },
    historicoContainer:{
        height: 500,
        width: "100%",
    }
})