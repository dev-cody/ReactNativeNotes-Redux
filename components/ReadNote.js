import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import NotesHeader from './HeaderComponent';

function ReadNotes({navigation}) {
    
    return (
        <>
        <NotesHeader titleText='note' />
            <View style={styles.container}>
                <Text> Read Notes Screen </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

export default ReadNotes;