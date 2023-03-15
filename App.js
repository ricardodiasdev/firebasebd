import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "./src/firebaseConnection";

// import Listagem from "./src/Listagem";

console.disableYellowBox = true;

export default function App() {
  // const [nome, setNome] = useState();
  // const [idade, setIdade] = useState();
  // const [cargo, setCargo] = useState();
  // const [usuarios, setUsuarios] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   async function dados() {
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
  //Buscando todos os registros
  //   await firebase
  //     .database()
  //     .ref("usuarios")
  //     .on("value", (snapshot) => {
  //       setUsuarios([]);
  //       snapshot.forEach((childItem) => {
  //         let data = {
  //           key: childItem.key,
  //           nome: childItem.val().nome,
  //           idade: childItem.val().idade,
  //           cargo: childItem.val().cargo,
  //         };
  //         // forma de atualizar o array com a inversão da ordem da lista (reverse())
  //         setLoading(false);
  //         setUsuarios((oldArray) => [...oldArray, data].reverse());
  //       });
  //     });
  // }
  // dados();
  // }, []);

  async function cadastrar() {
    // if (nome !== "" && idade !== "" && cargo !== "") {
    //   let usuarios = await firebase.database().ref("usuarios");
    //   let chave = usuarios.push().key;
    //   usuarios.child(chave).set({
    //     nome: nome,
    //     idade: idade,
    //     cargo: cargo,
    //   });
    //   alert("Cadastro realizado com sucesso");
    //   setNome("");
    //   setIdade("");
    //   setCargo("");
    // }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Usuário cadastrado: " + value.user.email);
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Sua senha deve ter pelo menos 6 caracteres");
          return;
        }
        if (error.code === "auth/invalid-email") {
          alert("Email inválido");
          return;
        } else {
          alert("Algo deu errado...");
          return;
        }
      });
    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
        textContentType='emailAddress'
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        textContentType='newPassword'
        value={password}
      />
      {/*<Text style={styles.text}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      /> */}
      <Button title="Cadastrar" onPress={cadastrar} />
      {/* {loading ? (
        <ActivityIndicator style={styles.indicator} color="#121212" size={35} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.key}
          data={usuarios}
          renderItem={({ item }) => <Listagem data={item} />}
        />
      )} */}
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
  indicator: {
    marginTop: 20,
  },
});
