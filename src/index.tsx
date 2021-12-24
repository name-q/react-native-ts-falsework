import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from '@/navigator/stack'
import { StatusBar } from 'react-native';

const App: React.FC = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
    </SafeAreaProvider>
);

export default App;
