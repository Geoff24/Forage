import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, icon}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value = {value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({ // TODO fix style
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '4%',
        borderColor: 'white',
        borderBottomColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        color: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 10,
    },
    input: {
    },

    placeholder:{}
});

export default CustomInput;