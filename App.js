import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { Avatar } from 'react-native-elements';


export default function Pag1() {
  return (
    <View style={styles.container}>
      <Avatar
          size={100}
          rounded
          icon={{ name: 'user', type: 'font-awesome'}}
          containerStyle={{ backgroundColor: '#e499e4' }}
      /> 
      <br></br>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
          style={styles.input}
          placeholder= "xxx@mail.com"/>
      <Text style={styles.texto}>Senha:</Text>
      <TextInput
          style={styles.input}
          placeholder= "#####" />
      <br></br>
      <Button 
        color="#e499e4"
        title="logar"
        onPress={() => Alert.alert("logando usuário")}
        />
        <br></br>
      <Button
        color="#e499e4"
        title="cadastre-se"
        onPress={() => Alert.alert("Cadatrando usuário")}
       />
      <Text>Esqueceu a senha?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

 function Pag2() {
  return (
    <View style={styles.container}>
      <Text style={styles.textogrande}>Cadastro</Text>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
          style={styles.input}
          placeholder= "Nadla gabriele"/>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
          style={styles.input}
          placeholder= "xxx@mail.com"/>
      <Text style={styles.texto}>Senha:</Text>
      <TextInput
          style={styles.input}
          placeholder= "#####" />
        <br></br>
      <Button
        color="#e499e4"
        title="cadastrar"
        onPress={() => Alert.alert("Cadatrando usuário")}
      />
      </View>
    );
  }  

 function Pag3() {
  return (
    <View style={styles.container}>
      <Text style={styles.textogrande}>Esqueceu a senha?</Text>
      <br></br>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
          style={styles.input}
          placeholder= "xxx@mail.com"/>
        <br></br>
      <Button
        color="#e499e4"
        title="enviar"
        onPress={() => Alert.alert("mandando recuperação de senha para o usuário")}
       />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: "50px",
    width: "50px",
    backgroundColor: "#e499e4"
  },
  input: {
    textAlign: "center",
    height: "40px",
    margin: "12px",
    borderColor: "#e499e4",
    borderWidth: "1px",
    padding: "10px",
    borderRadius: "15px"
  },
  texto:{
    fontSize: "20px",
    color: "#e499e4"
  },
  textogrande: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: '80px',
    color: "#e499e4"
  }
})


