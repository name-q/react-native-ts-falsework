import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';

import Config from "react-native-config";

const App: React.FC = () => (
    <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
            <View>
                <Text>
                    react-native-config  BASE_URL = {Config.BASE_URL}
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);

export default App;
