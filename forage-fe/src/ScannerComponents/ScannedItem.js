import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';
import { CheckBox } from 'react-native-elements'

const ScannedItem = ( {item, barcodeNumber} ) => {
    const [checked, setChecked] = useState(true)

    return (
        <View style={styles.container} key={barcodeNumber}>
            <Image style={styles.image} source={{uri: item.images[0]}}/>
            <Text style={styles.maintext}>{item.title}</Text>
            <View style={styles.checkBox}>
                <CheckBox checked={checked} checkedColor='black' onPress={() => setChecked(!checked)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        marginLeft: '5%'
    },

    image: {
        width: 70,
        height: 70,
        marginRight: '5%',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20
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
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    }
});

export default ScannedItem