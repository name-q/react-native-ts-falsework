import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from '@/navigator/stack'
import { StatusBar } from 'react-native';

import Models from '@/models/index'

const App: React.FC = () => (
    <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <Models />
        </SafeAreaProvider>
    </Provider>
);

export default App;
