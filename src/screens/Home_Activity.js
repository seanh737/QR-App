import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home_Activity extends Component {

  static navigationOptions =
    {
      title: 'Profile Activity',
    }; 

  render() {
    return (
      <View style={styles.MainContainer}>

        <Text style={{ marginTop: 40, fontSize: 20 }}>請掃描</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        
        </View>

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