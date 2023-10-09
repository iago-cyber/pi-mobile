import { Text, View, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import Logomarca from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useState} from 'react';
import estilos from '../components/estilos'


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();


  const handleEntrar = () => {
    navigation.navigate("Inicio")
  }
  const handleLogin = () => {
    navigation.navigate('Login')
  }
  const handleCadastrarUsuario = () => {
    navigation.navigate('CadastroUsuario')
  }
  const handleRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha')
  }



  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={estilos.quadrado}>
        <Image source={Logomarca} />
        <Text style={estilos.titulo}>Tutor Pet</Text>

        <TextInput
          style={estilos.input}
          label="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={estilos.input}
          label="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Button style={estilos.botao} onPress={handleEntrar}>Entrar</Button>
        <View style={estilos.botaofim}>
          <Button onPress={handleCadastrarUsuario}>Cadastrar Novo</Button>
          <Button onPress={handleRecuperarSenha}>Recuperar Senha</Button>
        </View>
      </View>
      
    </KeyboardAvoidingView>
  );
};



export default Login;