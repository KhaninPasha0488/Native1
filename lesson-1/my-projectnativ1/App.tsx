import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Alert, Button, StyleSheet, Switch, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>ТЕСТ НА   IQ</Text>
      <ActivityIndicator size="large" color="#00ff00" />
      <Button
          onPress={() => Alert.alert('Даша.Ваш IQ 10 Вы немного умнее обезьяны. Согласны?')}
          title="Пройти тест"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
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
