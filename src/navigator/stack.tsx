import React from 'react';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';

import AppBottomTabs from '@/navigator/bottomTabs'
import DetailPage from '@/pages/detail'
import AppDrawer from '@/navigator/drawer'

export type RootStackParamList = {
    BottomTabs: undefined;
    Detail: { id: string };
    AppDrawer: undefined;
}
const Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>

function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                // IOS水平滑动动画
                headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                // Android开启滑动返回
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen
                name="BottomTabs"
                component={AppBottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailPage}
                options={{ title: '详情页' }}
            />
            <Stack.Screen
                name="AppDrawer"
                component={AppDrawer}
                options={{ title: '抽屉页', gestureEnabled: false }}
            />
        </Stack.Navigator>
    );
}

export default AppStack;


/* 5.x - 6.x差异统计 */
/*
    官方推荐包 @react-navigation/native-stack是原生封装不兼容
    手式库 headerStyleInterpolator 造成iOS与安卓滑动风格不统一
    @react-navigation/stack     是javaScript实现但高度可定制 
    为了风格统一使用后者

    显隐     headerMode:"none" => headerShown: false
    标题     headerTitle => title
*/