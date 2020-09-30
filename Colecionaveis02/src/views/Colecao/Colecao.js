import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';

function Colecao({ navigation, route }) {
    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Admirável Mundo Novo',
            descricao: 'Um clássico moderno, o romance distópico de Aldous Huxley é incontornável',
            autor: 'Aldous Huxley',
            anoPublicacao: '1932',
            foto: require('../../../assets/itens/admiravel.jpg')
        },
        {
            id: '2',
            titulo: '1984',
            descricao: 'Uma das obras mais contundentes e influente do século XX',
            autor: 'George Orwell',
            anoPublicacao: '1949',
            foto: require('../../../assets/itens/1984.jpg')
        },
        {
            id: '3',
            titulo: 'Laranja Mecânica',
            descricao: 'Publicado pela primeira vez em 1962',
            autor: 'Anthony Burgess',
            anoPublicacao: '1962',
            foto: require('../../../assets/itens/laranja.jpg')
        },
        {
            id: '4',
            titulo: 'Neuromancer',
            descricao: 'O céu sobre o porto tinha cor de televisão fora do ar',
            autor: 'William Gibson',
            anoPublicacao: '1984',
            foto: require('../../../assets/itens/neuromancer.jpg')
        },
    ])
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={colecao}
                renderItem={({ item }) => <Lista data={item} />}
            />
        </View>
    )
}

export default Colecao;
