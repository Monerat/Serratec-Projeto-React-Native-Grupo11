import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do Digimon"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
