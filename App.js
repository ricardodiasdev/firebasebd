import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [cargo, setCargo] = useState();

  useEffect(() => {
    async function dados() {
      //Olheiro da nossa database - atualiza imediatamente
      // await firebase
      //   .database()
      //   .ref("usuarios/2")
      //   .on("value", (snapshot) => {
      //     setNome(snapshot.val().nome);
      //     setIdade(snapshot.val().idade);
      //   });
      // Atualiza quando o app é renderizado
      // await firebase.database().ref('nome').once('value', (snapshot)=> {
      //   setNome(snapshot.val());
      // });
      // Criando um nó
      //await firebase.database().ref('tipo').set('clientes');
      //Removendo um nó
      //await firebase.database().ref("usuario").remove();
      //Criando um child (registro do nó)
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Leticia',
      //   idade: 17,
      //   cargo: 'Estudante do ensino médio'
      // })
      //Atualiza somente um campo do registro
      // await firebase
      //   .database()
      //   .ref("usuarios")
      //   .child(3)
      //   .update({ cargo: "Universitária" });
    }
    dados();
  }, []);

  async function cadastrar() {
    if (nome !== "" && idade !== "" && cargo !== "") {
      let usuarios = await firebase.database().ref("usuarios");
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        idade: idade,
        cargo: cargo,
      });

      alert("Cadastro realizado com sucesso");
      setNome("");
      setIdade("");
      setCargo("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />
      <Text style={styles.text}>Idade</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setIdade(texto)}
        value={idade}
      />
      <Text style={styles.text}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />
      <Button title="Novo cadastro" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 45,
    fontSize: 20,
  },
});
