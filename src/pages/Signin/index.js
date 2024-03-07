import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="Digite um email..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite uma senha..."
          style={styles.input}
        />

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
});
