import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

styles.cardContainer = {
    width: 360,
    height: 328,
    backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 2
};

styles.cardInfo = {
    container: {
        height: 148,
        backgroundColor: 'white'
    },
    tag: {
        container: {
            height: 48,
            justifyContent: 'center',
            marginLeft: 16,
            marginRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: 'white'
        },
        button: {
            width: null,
            height: 32,
            alignSelf: 'flex-start',
            justifyContent: 'center',
            borderRadius: 3,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#bbb'
        },
        buttonText: {
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: 12
        }
    },
    description: {
        container: {
            marginLeft: 16,
            marginRight: 16
        },
        title: {
            fontSize: 18,
            color: '#4d4d4d',
            marginBottom: 4,
            fontWeight: 'bold'
        }
    }
};

styles.cardMedia = {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
};

export default styles;
