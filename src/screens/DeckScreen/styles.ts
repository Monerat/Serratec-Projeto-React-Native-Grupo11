import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    rua1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
       // margin: 5,
        minHeight: 400,         
      },
    viewText: {
        alignItems: 'center',
        
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: -12
        
      
    },
    imageLogo: {
        height: 130,
        width: "60%",
      },
      textSublinha:{
        fontSize: 15,
        fontWeight: 'bold'
      },columnWrapper: {
        flex: 1,
      },
      container: {
        alignItems: 'center',
      },
      flatListContainer: {
        flexGrow: 1,
      },
      headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      
    
  });
  export default styles;