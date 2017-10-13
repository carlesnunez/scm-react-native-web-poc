/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from './styles';
export default class CardArticle extends Component < {} > {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        Image.getSize(this.props.media.src, (width, height) => {
            this.setState({width, height});
        });
    }

    render() {
        const {
            link,
            media,
            tag,
            comments,
            title,
            description
        } = this.props;
        const {width, height} = this.state;
        if (this.state.width) {
            return (
                <View style={styles.cardContainer}>
                    <Image style={styles.cardMedia, {width, height}} source={{
                        uri: media.src
                    }}/>
                    <View style={styles.cardInfo.container}>
                        <View style={styles.cardInfo.tag.container}>
                            <View style={styles.cardInfo.tag.button}>
                                <Text style={styles.cardInfo.tag.buttonText}>{tag.text}</Text>
                            </View>
                        </View>
                        <View style={styles.cardInfo.description.container}>
                            <Text style={styles.cardInfo.description.title}>{title}</Text>
                            <Text>{description}</Text>
                        </View>
                    </View>
                </View>
            );
        }

        return null;
    }
};
