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
                <View style={{marginBottom: 10}}>
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
              <View style={{ marginTop: 10 }}>
                  <CardArticle
                    link='https://github.com/SUI-Components/sui-components'
                    media={{
                      src: 'http://lorempicsum.com/simpsons/360/300/4',
                      alt: 'Article card'
                    }}
                    tag={{
                      url: 'http://www.coches.net/novedades/',
                      text: 'The simpsons label soooo long'
                    }}
                    comments={{
                      url: 'http://www.coches.net/opiniones/nuevo-hyundai-i10-presentacion',
                      count: 109
                    }}
                    title='Article simpsons long image card'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatum minus nihil, eum perspiciatis?'
                  />
                </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
