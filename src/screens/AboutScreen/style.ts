import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      outContainer: {
        backgroundColor: 'white',
        opacity: 0.6,
        width: '100%',
        height: '100%'
      },
      imagePokemon:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 170,
        top: 15,
        marginLeft: 10      
      },
      marcante:{
        position: 'absolute',
        top: 150,
        width: '95%',
        height: 250,
      },
      creditos:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 7, 
      },
      nomeCreditos:{
        alignItems: 'center',
        color: 'black',
        fontWeight: 'bold'
      },
      boddy:{
        flex: 9, 
        justifyContent: 'flex-end',
      },
      text:{
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
        fontSize: 17
      },
      agradece:{
        fontSize: 20,
        alignItems: 'center'
      },
      gitHub:{
        marginLeft: 20,
        alignItems: 'center'
      }
})