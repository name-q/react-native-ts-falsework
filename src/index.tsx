import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';

import Config from "react-native-config";
import AntDesign from 'react-native-vector-icons/AntDesign'

const App: React.FC = () => (
    <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
            <View>
                <AntDesign name='smileo' size={50} style={{ color: 'red' }} />
                <AntDesign name='key' size={50} style={{ color: '#eee' }} />
                <Text>
                    react-native-config  BASE_URL = {Config.BASE_URL}
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
);

export default App;
