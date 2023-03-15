import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Listagem = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.nome}</Text>
      <Text style={styles.text}>{data.idade}</Text>
      <Text style={styles.text}>{data.cargo}</Text>
    </View>
  )
}

export default Listagem

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#121212'
    },
    text:{
        color:'#fff',
        fontSize: 17
    }

})