import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
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
    touchContainer:{
        width:190,
        height:300,
        margin:5,
        
    }
})