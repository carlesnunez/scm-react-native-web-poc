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
  View
} from 'react-native';
import CardArticle from './CardArticle';
export default class App extends Component {

  render() {
    return <View style={styles.container}>
                  <CardArticle
                    link='https://github.com/SUI-Components/sui-components'
                    media={{
                      src: 'http://lorempicsum.com/simpsons/360/180/1',
                      alt: 'Article card'
                    }}
                    tag={{
                      url: 'http://www.coches.net/novedades/',
                      text: 'Testing label long'
                    }}
                    comments={{
                      url: 'http://www.coches.net/opiniones/nuevo-hyundai-i10-presentacion',
                      count: 109
                    }}
                    title='Article card'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatum minus nihil, eum perspiciatis?'
                  />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
