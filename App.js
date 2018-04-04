/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }
  onModalClose() {
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.isModalOpen}
          transparent={false}
          onRequestClose={() => this.onModalClose()}
        >
          <View
            style={{
              backgroundColor: '#000',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableHighlight onPress={() => this.onModalClose()}>
              <Text style={styles.link}>Such a beautiful modal!</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <View style={styles.container}>
          <Text style={styles.instructions}>
            isModalOpen is {this.state.isModalOpen.toString()}
          </Text>
          <TouchableHighlight
            style={{
              backgroundColor: '#000'
            }}
            onPress={() => this.setState({ isModalOpen: true })}
          >
            <Text style={styles.link}>Open Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  link: {
    fontSize: 40,
    color: 'white'
  }
});
