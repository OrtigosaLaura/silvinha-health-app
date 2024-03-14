import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ResultImc(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.menssageResult}
        </Text>
      <Text style={styles.textImc}>
        {props.ResultImc}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    Width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },
  text: {
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold'


  },
  textImc: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold'


  },

})