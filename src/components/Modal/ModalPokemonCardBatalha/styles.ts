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
    buttonsContainer:{
        height: "20%",
        width:"100%",
    },
    buttonsContainer1:{
        height: "50%",
        width:"100%",
        padding: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonsHp: {
        height: "100%",
        width:"30%",
        backgroundColor: "#FB1B1B",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsAttack: {
        height: "100%",
        width:"30%",
        backgroundColor: "#FFCC00",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsDefesa: {
        height: "100%",
        width:"30%",
        backgroundColor: "#0075BE",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    buttonsContainer2:{
        height: "50%",
        width:"100%",
        padding: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonsAttackEspecial: {
        height: "100%",
        width:"30%",
        backgroundColor: "#E54222",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsDefesaEspecial: {
        height: "100%",
        width:"30%",
        backgroundColor: "#37796C",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsAgilidade: {
        height: "100%",
        width:"30%",
        backgroundColor: "#EFFCD5",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
})