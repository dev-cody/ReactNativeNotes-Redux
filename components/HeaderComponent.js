import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

function NotesHeader({ titleText }) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container} >
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#46653C'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    title: {
        fontSize: 25,
        color: '#fff'
    }
})

export default NotesHeader;