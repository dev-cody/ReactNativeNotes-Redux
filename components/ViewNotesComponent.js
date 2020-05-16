import React from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';


import { useSelector, useDispatch } from 'react-redux';
import { addnote, deletenote } from '../reducer/Notes';

import NotesHeader from './HeaderComponent';


function ViewNotes({ navigation }) {

    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id => dispatch(deletenote(id))

    return (
        <>
        <NotesHeader titleText='notes' />
            <View style={styles.container}>
            {notes.length === 0 ? (
                <View style={styles.titleContainer}>
                    <Text> no notes here</Text>
                </View>
            ) : (
                <FlatList 
                    data={notes}
                    renderItem={({item}) => (
                    <List.Item 
                        title={item.note.title}
                        description={item.note.noteContent}
                        titleStyle={styles.listTitle}
                        onPress = {() => {
                            Alert.alert(
                                'delete note?',
                                'are you sure you would like to delete this note ' + item.note.title + '?',
                                [
                                    {
                                        text: 'Cancel',
                                        onPress: () => console.log(item.note.title + ' not deleted'),
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'yes, delete me',
                                        onPress: () => deleteNote(item.id)
                                    }
                                ]
                            )
                        }}
                    /> 
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            )}

                <FAB
                    icon='plus'
                    style={styles.fab}
                    onPress ={() => navigation.navigate('AddNotes', { addNote })}
                />
            </View>
        </>
    )
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
    fab: {
        height: 75,
        width: 75,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32444e',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
});

export default ViewNotes;