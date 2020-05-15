import { createStore } from 'redux';

import notesReducer from '../reducer/Notes';

const store = createStore(notesReducer)

export default store;