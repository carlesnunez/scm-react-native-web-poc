/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class CardArticle extends Component<{}> {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    Image.getSize(this.props.media.src, (width, height) => {
      this.setState({ width, height });
    });
  }

  render() {
    const { link, media, tag, comments, title, description } = this.props;
    const { width, height } = this.state;
    if(this.state.width) {
      return (
        <View style={styles.cardContainer}>
          <Image style={styles.cardMedia, { width, height }}
                 source={{ uri: media.src }}
          />
          <View style={ { height: 148, backgroundColor: 'white' } }>
            <View style={{ height: 48, justifyContent: 'center', marginLeft: 16, marginRight: 16, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white' }}>
              <View style={{ width: null, height: 32, alignSelf: 'flex-start', justifyContent: 'center', borderRadius: 3, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#bbb' }}>
                <Text style={{ paddingLeft: 8, paddingRight: 8, fontSize: 12 }}>{tag.text}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16}}>
              <Text style={{ fontSize: 18, color: '#4d4d4d', marginBottom: 4, fontWeight: 'bold'}}>{title}</Text>
              <Text>{description}</Text>
            </View>
          </View>
        </View>
      );
    }

    return <Image style={styles.cardMedia, { width, height }}
                  source={{ uri: media.src }}
            />;
  }
}

const styles = StyleSheet.create({
  cardContainer: {
      width: 360,
      height: 328,
      backgroundColor: 'grey',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 2,
  },
  cardMedia: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
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
