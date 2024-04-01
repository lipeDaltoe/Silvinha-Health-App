import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Form from '../components/Form';

export default function Imc() {
  return (
    <View style={styles.container}>
      <Title />
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191825',
    paddingTop: 80,
  },
});
