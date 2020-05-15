import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ViewNotes from '../components/ViewNotesComponent';
import AddNotes from '../components/AddNewNote';
import ReadNotes from '../components/ReadNote';

const MainStack = createStackNavigator({
    
    ViewNotes: {
        screen: ViewNotes
    },
    AddNotes: {
        screen: AddNotes
    },
    ReadNotes: {
        screen: ReadNotes
    }

},
    {
        initialRouteName: 'ViewNotes',
        headerMode: 'none',
        mode: 'modal'

})
export default createAppContainer(MainStack);