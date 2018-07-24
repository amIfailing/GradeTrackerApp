import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// this makes a custom components that can be used in other components
class CounterClass extends React.Component {

  state = {count: 0}

  // componentDidMount is a function that is called as soon as the component
  // is loaded into the component tree
  componentDidMount() {
    // setInterval is a function that will execute a function after a certain
    // amount of millliseconds and will continously do so
    setInterval(() => {
      this.setState({count: this.state.count +1})
    }, 1000)
  } // end componentDidMount

  render() {
    const {count} = this.state;
    const {color, size} = this.props;

    return(
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  } // end render
}// end CounterClass

// make sure to always use React.Component not just component
export default class SomeComponet extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
        <Text>Some components stuff</Text>
      </View>
    )
  }
} // end SomeCompnent


/*export default class Counter extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <CounterClass color={'red'} size={140}/>
      </View>
    ) // end return
  }// end render
} // end class App
*/

// styles is just a variable name used to simplify the code for tags like View and Text
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})// end styles
