import React from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';

const ScannedItem = ( {item} ) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.images[0]}}/>
            <Text style={styles.maintext}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginRight: 25
    },

    maintext: {
        fontSize: 16,
        top: 20,
        width: '50%'
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        margin: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    }
});

export default ScannedItem