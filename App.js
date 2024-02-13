import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const list = ['Guilherme Artigas', 'Rafaela'];
  return (
    <View style={styles.container}>
      {list.map((name, i) => <Text key={i}>{name}</Text>)}
      {/*<Text>Guilherme Artigas</Text>*/}
      {/*<Text>Guilherme Artigas</Text>*/}
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
});
