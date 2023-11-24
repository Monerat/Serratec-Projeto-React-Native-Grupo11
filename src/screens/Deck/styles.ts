import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  headerContainer: {
    height: '20%',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  imageLogo: {
    height: 130,
    width: '60%',
    alignSelf: 'center',
  },
  viewText: {
    flexDirection: 'row',
    height: '18%',
    width: '100%',
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
  viewDeck: {
    flexDirection: 'row',
  },
  viewNumero: {
    flexDirection: 'row',
  },
  randomDeckButton: {
    backgroundColor: '#E04A49',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  randomDeckButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearDeckButton: {
    backgroundColor: '#26326B',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  clearDeckButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  miniCardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
