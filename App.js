import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FeelingSecreeen from './Secreens/FeelingSecreeen';
import QotesSecreen from './Secreens/QotesSecreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
            headerStyle:{backgroundColor:'#1A237E',},
            animation:'flip',
            headerTintColor: '#FFFFFF', }}>
        <Stack.Screen name="Feeling" component={FeelingSecreeen} />
        <Stack.Screen name="Quotes" component={QotesSecreen} />
      </Stack.Navigator>
  </NavigationContainer>
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
