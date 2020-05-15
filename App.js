import React from 'react';
import AppNavigator from './navigation/MainStack';
import {Provider as PaperProvider } from 'react-native-paper';

import {Provider as StoreProvider} from 'react-redux';
import store from './redux/Store';

export default function App() {
  return (
    <StoreProvider store={ store }>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}

