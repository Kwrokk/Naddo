import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { SafeAreaView } from 'react-native-web';

const Stack = createNativeStackNavigator();

function Pag1({navigation}) {
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
        onPress={()=>navigation.navigate('Contatos')}
        />
      
        <br></br>
      <Button
        color="#e499e4"
        title="cadastre-se"
        onPress={()=>navigation.navigate('Cadastro')}
       />
      <Text>Esqueceu a senha?</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}


function Contatospg({navigation}) {
  contatos = [[['Nadla Gabriele'], ['81 91982-1982']], [["Idinaldo Rocha"],['81 98128-2692']], [['Naddo Gacha'], ['81 96292-2875']]]
  return (
    <View style={styles.container}>
      
      <Text style={styles.textomedio}>Lista de contatos</Text>
      <br></br>
      <Avatar
          size={40}
          rounded
          icon={{ name: 'user', type: 'font-awesome'}}
          containerStyle={{ backgroundColor: '#e499e4' }}
      /> 
      <Text style={styles.texto}>{contatos[0][0]} - {contatos[0][1]} </Text>
      <Button
          color="#e499e4"
          title="Modificar"
          onPress={()=>navigation.navigate('Modificar')}
      /><br></br>
      <Avatar
          size={40}
          rounded
          icon={{ name: 'user', type: 'font-awesome'}}
          containerStyle={{ backgroundColor: '#e499e4' }}
      /> 
      <Text style={styles.texto}>{contatos[1][0]} - {contatos[1][1]}</Text>
      <Button
          color="#e499e4"
          title="Modificar"
          onPress={()=>navigation.navigate('Modificar')}
      /><br></br>
      <Avatar
          size={40}
          rounded
          icon={{ name: 'user', type: 'font-awesome'}}
          containerStyle={{ backgroundColor: '#e499e4' }}
      /> 
      <Text style={styles.texto}>{contatos[2][0]} - {contatos[2][1]}</Text>
      <Button
          color="#e499e4"
          title="Modificar"
          onPress={()=>navigation.navigate('Modificar')}
      />
      <br></br>
      <Button
        color="#e499e4"
        title="Adicionar"
        onPress={()=>navigation.navigate('Adicionar')}
      />
      </View>
    );
  }  

 function Cadastropg({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
          style={styles.input}
          placeholder= "Ex: Nadla Rocha"/>
      <Text style={styles.texto}>CPF:</Text>
      <TextInput
          style={styles.input}
          placeholder= "000.000.000-00"/>
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
        title="salvar"
        onPress={() => alert.alert("salvando cadastro")}
       />

      <StatusBar style="auto" />
    </View>
  );
}

function Adicionarpg({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
          style={styles.input}
          placeholder= "Ex: Nadla Rocha"/>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
          style={styles.input}
          placeholder= "xxx@mail.com"/>
      <Text style={styles.texto}>Telefone:</Text>
      <TextInput
          style={styles.input}
          placeholder= "(81) 90000-0000" />
        <br></br>
      <Button
        color="#e499e4"
        title="salvar"
        onPress={() => alert.alert("salvando contato")}
       />

      <StatusBar style="auto" />
    </View>
  );
}

function Modificarpg({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
          style={styles.input}
          placeholder= "Ex: Nadla Rocha"/>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
          style={styles.input}
          placeholder= "xxx@mail.com"/>
      <Text style={styles.texto}>Telefone:</Text>
      <TextInput
          style={styles.input}
          placeholder= "(81) 90000-0000" />
        <br></br>
      <Button
        color="#e499e4"
        title="alterar"
        onPress={() => alert.alert("alterando contato")}
       /><br></br>
       <Button
        color="#e499e4"
        title="excluir"
        onPress={() => alert.alert("excluindo contato")}
       />

      <StatusBar style="auto" />
    </View>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Pag1} options={{headerTitleAlign: 'center', headerTintColor: "white", headerStyle: {backgroundColor:'#e499e4'}}} />
        <Stack.Screen name="Contatos" component={Contatospg} options={{headerTitleAlign: 'center', headerTintColor: "white", headerStyle: {backgroundColor:'#e499e4'}}} />
        <Stack.Screen name="Cadastro" component={Cadastropg} options={{headerTitleAlign: 'center', headerTintColor: "white", headerTitle: 'Usuário',headerStyle: {backgroundColor:'#e499e4'}}} />
        <Stack.Screen name="Adicionar" component={Adicionarpg} options={{headerTitleAlign: 'center', headerTintColor: "white", headerTitle: 'Contato',headerStyle: {backgroundColor:'#e499e4'}}} />
        <Stack.Screen name="Modificar" component={Modificarpg} options={{headerTitleAlign: 'center', headerTintColor: "white", headerTitle: 'Contato',headerStyle: {backgroundColor:'#e499e4'}}} />
      </Stack.Navigator>
    </NavigationContainer>
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
  textomedio:{
    fontSize: "40px",
    color: "#e499e4"
  },
  textogrande: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: '80px',
    color: "#e499e4"
  }
})


export default App;