import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// this allows us to navigate between screens
import { createStackNavigator } from 'react-navigation';

/* importing custom components
 you need a string representing the path to where the component is located
 since the files are in the same folder, use ./ as the start of the path
*/
import HomeScreen from './Components/homescreen';
import Counter from './Components/counterclass';

const RootStack = createStackNavigator ({
    Home: {screen: HomeScreen},
    CounterPage: {screen: Counter},
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render () {
    return <RootStack />;
  }
}
