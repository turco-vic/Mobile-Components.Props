import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write something" />
      <Button text="Click me"/>
      <Button text="Don't click on me"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});