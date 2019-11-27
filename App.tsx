import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Home from './src/Home';
import Some from './src/Some';
import { Provider } from './src/utils/stateManager';


const App = () => {
  return (
    <Provider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Home />
          <Some />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
