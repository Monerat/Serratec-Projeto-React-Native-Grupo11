import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe4f3',
        alignItems: 'center'
      },
      imagePokemon:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 180,
        top: 20      
      },
      creditos:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 9, 
      },
      gitHub:{
        alignItems: 'center',
      },
      boddy:{
        flex: 9, 
        justifyContent: 'flex-end',
        margin: 10
      },
      agradece:{
        fontSize: 20,
      }
})