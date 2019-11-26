import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Settings_Activity extends Component {

  static navigationOptions =
    {
      title: 'Settings Activity',
    };

  render() {

    return (

      <View style={styles.MainContainer}>

        <Text style={{ marginTop: 40, fontSize: 20 }}>且慢</Text>
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Details')}>

          <Text style={styles.text}>Goto Detail Screen</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Profile')}>

          <Text style={styles.text}>History</Text>

        </TouchableOpacity>

      </View>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});