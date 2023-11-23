import { Text, FlatList, View,  TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import { ResultadoBatalha, ResultadoBatalhaProps} from "../../components/ResultadoBatalha";
import StackNavigator from "../../routes/BottomStackNavigator";
import { Navigate } from "react-router-native";
import { Battle } from "../Battle";
import { BattleContext } from "../../context/BattleContext";

export const HistoricoBattle = ({navigation}:any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { listaResultadoBatalha } = useContext(BattleContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historico de Batalha</Text>
      <View style={styles.batalharContainer}>
        <TouchableOpacity style={styles.buttonBatalhar} onPress={()=>navigation.navigate('Battle')}>
          <Text style={styles.buttonText}>Batalhar!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historicoContainer} >
        <FlatList
          data={listaResultadoBatalha}
          renderItem={({ item }) => {
            return <ResultadoBatalha id={item.id} resultado={item.resultado}  deck={item.deck} />
          }}
        />
      </View>
    </View>
  );
};