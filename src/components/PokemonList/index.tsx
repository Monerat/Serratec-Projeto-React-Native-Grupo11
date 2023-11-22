import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export interface PokemonListProps {
	name: string;
	url: string;
}

export interface PokemonProps {
	item: PokemonListProps;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedItem: React.Dispatch<React.SetStateAction<PokemonListProps>>;
}

export const PokemonList = ({ item, setIsModalVisible, setSelectedItem }: PokemonProps) => {

	function abrirModal () {
		setSelectedItem(item);
		setIsModalVisible(true);
	}

	return <TouchableOpacity onPress={abrirModal} style={styles.buttonPokemon}>
		<Text style={styles.textPokemon}>
			{ item.name }
		</Text>
	</TouchableOpacity>
}