import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginVertical: 4,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  skillContainer: {
    marginVertical: 8,
  },
  skillName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  evolutionContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },
  evolutionImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  }
});

export default styles;