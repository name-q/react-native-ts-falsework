import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from '@/navigator/stack'

const App: React.FC = () => (
    <NavigationContainer>
        <AppStack />
    </NavigationContainer>
);

export default App;
