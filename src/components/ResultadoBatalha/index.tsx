import React from "react";
import {styles} from './styles';
import { View, Text, FlatList, Image} from "react-native";
import { Pokemon } from "../../services/api";

export interface ResultadoBatalhaProps {
    id: number;
    resultado?: "Win" | "Loss";
    deck: Pokemon[];
};

export const ResultadoBatalha = (batalha:ResultadoBatalhaProps) => {

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <Text style={batalha.resultado ==='Win'?styles.txtWin :styles.txtLoss }>{batalha.resultado}</Text>
            </View>
            <View style={styles.deckContainer}>
                <FlatList
                    data={batalha.deck}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return <Image style={styles.pokeMiniature} source={{uri:item.sprites.other["official-artwork"].front_default}}></Image>
                      }}
                    ></FlatList>
            </View>
        </View>
    )
};