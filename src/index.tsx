import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';

import AssetsDemo from '@/assets/demo'
import ComponentsDemo from '@/components/demo'
import ConfigDemo from '@/config/demo'
import ModelsDemo from '@/models/demo'
import NavigatorDemo from '@/navigator/demo'
import PagesDemo from '@/pages/demo'
import UtilssDemo from '@/utils/demo'
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
            <AssetsDemo />
            <ComponentsDemo />
            <ConfigDemo />
            <ModelsDemo />
            <NavigatorDemo />
            <PagesDemo />
            <UtilssDemo />
        </ScrollView>
    </SafeAreaView>
);

export default App;
