import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// importing navigation to use the navigate function
import { createStackNavigator } from 'react-navigation';

export default class homeScreen extends React.Component {
  render() {
    return(
      <View style={styles.ScreenHome}>
        <Text style= {styles.homeText}>This will be the homescreen.</Text>
        <Button
          title="Change Screens"
          onPress={() => this.props.navigation.navigate('CounterPage')}
        />
      </View>
    );// end return
  } //  end render
}// end class HomeScreen

const styles = StyleSheet.create({
  ScreenHome: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  homeText: {
    color: 'green',
    fontSize: 20,
  }
}) // end styles
