import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from '@/navigator/stack'

const App: React.FC = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    </SafeAreaProvider>
);

export default App;
