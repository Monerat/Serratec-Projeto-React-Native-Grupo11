import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    height: '20%',
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    
  },
  imageLogo: {
    height: 130,
    width: "60%",
    alignSelf: 'center',
  },

  viewText: {
    flexDirection: "row",
    height: '18%',
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  numeroCards: {
    fontSize: 18,
  },
  viewDeck:{
    flexDirection: 'row'
  },
  viewNumero: {
    flexDirection: 'row'
  }
});