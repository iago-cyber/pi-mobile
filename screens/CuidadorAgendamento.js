import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../components/layoutBase';

import estilos from '../components/estilos';
import Calendario from '../components/Calendario';
import ListaPets from '../components/ListaPets';
import { data } from '../components/ListaPets';

const CuidadorAgendamento = (props) => {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState(null);

  const handleSair = () => {
    navigation.navigate('Login');
  };

  const handleAgendar = () => {
    if (selectedPet) {
      alert(`Agendamento realizado para ${selectedPet.nome}!`);
    } else {
      alert('Selecione um animal de estimação antes de agendar.');
    }
  };

  const petsData = data; // Assuming data is an array of pets

  const selectPet = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <LayoutBase>
      <ScrollView>
        <View>
          <Calendario />
        </View>
        <View style={estilos.containerInterno}>
          <View style={{ marginTop: 5 }}>
            <Text style={{ marginBottom: 0 }}>
              Clique no Pet para selecionar{' '}
            </Text>
            <ListaPets
              data={petsData}
              exibirNome={true}
              exibirFoto={true}
              onSelect={selectPet}
            />
            </View>
        </View>
      </ScrollView>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity
          style={estilos.botaoCuidador}
          onPress={handleAgendar}>
          <Text style={estilos.botaoTextoCuidador}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </LayoutBase>
  );
};

export default CuidadorAgendamento;
