/* This file is an example of how to create a specific Component
 for react native. They are similar to structs or classes in other
languages so they can be used in any part of the code
*/

import React from 'react';
// the line below are specific for the component to work
import
{
  View,
  Text,
} from 'react-native';

// it seems like there are errors when letting brackets have their own line
export default class firstClass extends React.Component {
  render() {
    return (
      <View>
        <Text>Just some sample text.</Text>
      </View>
    )// end return
  }// end render
}// end firstclass
