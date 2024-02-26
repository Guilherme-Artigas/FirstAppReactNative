import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text>Bem vindo(a)</Text>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
});
