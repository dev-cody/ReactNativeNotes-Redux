import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, FAB, IconButton } from 'react-native-paper';

import NotesHeader from './HeaderComponent'

function AddNotes({navigation}) {

    const [title, setTitle] = useState('')
    const [noteContent, setNoteContent] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({title, noteContent});
        navigation.goBack()
    }

    return (
        <>
        <NotesHeader titleText='new note' />
        <IconButton
            icon='close'
            size={25}
            color='white' 
            onPress={() => navigation.goBack()}
            style={styles.iconButton}
        />
        <View>
            <TextInput
                label='note title'
                value={title}
                mode='outlined'
                onChangeText={setTitle}
                style={styles.title}
            />
            <TextInput
                label='note'
                value={noteContent}
                mode='flat'
                onChangeText={setNoteContent}
                multiline={true}
                style={styles.text}
            />
            <FAB
                icon='check'
                label='save note'
                disabled={title == '' ? true : false}
                style={styles.fab}
                onPress={() => onSaveNote()}
            />
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
},  
iconButton: {
    backgroundColor: '#32444e',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,   
    height: 75,
    width: 75,
    borderRadius: 50
},
fab: {
    margin: 10,
    backgroundColor: '#32444e'
},
text: {
    height: 300,
    margin: 10
},
title: {
    fontSize: 25,
    margin: 10
}
});

export default AddNotes;