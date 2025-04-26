import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Avatar, onPress} from 'react-native-elements';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import React, { useState } from 'react';
import axios from 'axios';

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


function Contatospg({navigation, route}) {
  const [contatos, setContatos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3000/contatos')
      .then((response) => {
        setContatos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar contatos:', error);
        setLoading(false);
      });
  }, []);

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
    <View> {
      contatos.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.nome}</ListItem.Title>
              <ListItem.Title>{item.email}</ListItem.Title>
              <ListItem.Title>{item.cpf}</ListItem.Title>
              <ListItem.Title>{item.num}</ListItem.Title>
              <ListItem.Title><Button style={styles.Button} title="Editar" onPress={() => navigation.navigate('Modificarpg', {contatos: item})}/></ListItem.Title>
            </ListItem.Content>
          </ListItem>
      ))
      }   
    </View>
      </View>
    );
  }  

 function Cadastropg({navigation}) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const saveUser = () => {
    axios.post('http://localhost:3000/usuarios', {
      nome, cpf, senha
    })
    .then(() => navigation.navigate('Login'))
    .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
     <Input style={styles.Input} placeholder='Ex: idinaldo' value={nome} onChangeText={setNome}/>
      <Text style={styles.texto}>CPF:</Text>
      <Input style={styles.Input} placeholder='000.000.000-00' value={cpf} onChangeText={setCpf}/>
      <Text style={styles.texto}>Email:</Text>
      <Input style={styles.Input} placeholder='xxx@mail.com' value={email} onChangeText={setEmail}/>
      <Text style={styles.texto}>Senha:</Text>
      <Input style={styles.Input} placeholder="#####" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
        <br></br>
      <Button
        color="#e499e4"
        title="salvar"
        onPress={navigation.navigate('Contatospg', {contatos: item})}
       />

      <StatusBar style="auto" />
    </View>
  );
}

function Adicionarpg({navigation}) {
  const [num, setNum] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvarCont = () => {
    axios.post('http://localhost:3000/contatos', {
      num, nome, email
    })
    .then(() => navigation.navigate('Contatospg'))
    .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <Input style={styles.Input} placeholder='Nadla Rocha' value={nome} onChangeText={setNome}/>
      <Text style={styles.texto}>Email:</Text>
      <Input style={styles.Input} placeholder='xxx@mail.com' value={email} onChangeText={setEmail}/>
      <Text style={styles.texto}>Telefone:</Text>
      <Input style={styles.Input} placeholder='(81) 90000-0000' value={num} onChangeText={setNum}/>
  
        <br></br>
      <Button
        color="#e499e4"
        title="salvar"
        onPress={{salvarCont}}
       />

      <StatusBar style="auto" />
    </View>
  );
}

function Modificarpg({navigation}) {
  const { contatos } = route.params;
  const [num, setNum] = useState(contatos.num);
  const [nome, setNome] = useState(contatos.nome);
  const [email, setEmail] = useState(contatos.email);

  const deletarContato = (id) => {
    axios.delete(`http://localhost:3000/contatos/${contatos.id}`)
    .then((response) => {
      setContatos(response.data);
      setLoading(false);
    } , navigation.navigate('Home'))
    .catch((error) => {
      console.error('Erro ao buscar contatos:', error);
      setLoading(false);
    });
  }

  const addContato = () => {
    axios.put(`http://localhost:3000/contatos/${contatos.id}`, {
      ...contatos,
      nome,
      num,
      email
    })
    .then(() => navigation.navigate('Home'))
    .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <Input style={styles.Input} placeholder='Ex:> idinaldo' value={nome} onChangeText={setNome}/>
      <Text style={styles.texto}>Email:</Text>
      <Input style={styles.Input} placeholder='xxx@mail'value={email} onChangeText={setEmail}/>
      <Text style={styles.texto}>Telefone:</Text>
      <Input style={styles.Input} placeholder='(81) 90000-0000' value={num} onChangeText={setNum}/>
        <br></br>
      <Button
        color="#e499e4"
        title="alterar"
        onPress={addContato}
       /><br></br>
       <Button
        color="#e499e4"
        title="excluir"
        onPress={deletarContato}
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