import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { styles } from "./style"
import pokemon from "./pokemon-logo-png-1421.png" 
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';



const data = [
    { id: '1', name: 'Manel', github: 'https://github.com/VitorLack' },
    { id: '2', name: 'Gustavin', gihub: 'https://github.com/Monerat' },
    { id: '3', name: 'Coxinha', github: '' },//Falta o git de Ricardo
    { id: '4', name: 'Isakke', github: 'https://github.com/IsaquePerez' },
    { id: '5', name: 'Joelson', github: 'https://github.com/joe-higashii' },
  ];

const AboutScreen = () => {

    const handleGitHubClick = ({gitLink}:any) => { //coloquei esse any pq estava com erro
        Linking.openURL(gitLink);
      };

    const renderItem = ({ item }: any ) => ( //coloquei esse any pq estava com erro
        <View style={styles.gitHub}>
            <View style={styles.creditos}>
            <MaterialCommunityIcons name="pokeball" size={24} color="red" />
            <Text>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleGitHubClick(item.github)}>
            <AntDesign name="github" size={24} color="black" />
            </TouchableOpacity>
        </View>
      );

  return (
    

    <View style={styles.container}>
        <Image source={pokemon} style={styles.imagePokemon}/>
        
        <View style={styles.boddy}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque repudiandae tenetur beatae, praesentium consectetur libero accusantium, sunt neque nobis adipisci. Totam aliquam aut qui. Doloribus cumque sapiente reprehenderit aperiam quod. Earum quas excepturi sit, corporis quaerat provident doloribus rerum, aperiam amet maxime molestiae.  modi maiores adipisci corrupti ex ratione aspernatur quo rem cum saepe quia quos, voluptatum ab, deleniti error animi architecto temporibus non maxime eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quo labore natus corporis nemo architecto at pariatur exercitationem, mollitia impedit distinctio recusandae blanditiis ex vero iure, tempore unde suscipit veritatis tenetur optio ab corrupti. Dolores reprehenderit commodi quo excepturi esse officiis facilis ipsa iusto laboriosam deserunt sed cumque vel id temporibus ipsam dolorem adipisci quos dolorum laborum aliquid, quia vitae sunt modi alias. Quo necessitatibus dicta blanditiis nostrum ratione delectus distinctio eos harum, dolorem, accusantium dolore inventore porro natus velit optio ullam quisquam provident temporibus. Placeat tenetur quod id corporis nihil, ex similique amet eius iste magni et sint maxime?</Text>
        </View>
        <Text style={styles.agradece}>Créditos: Grupo 11</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        contentContainerStyle={styles.container}
      />
    </View>
  )
}
export default AboutScreen;
