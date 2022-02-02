import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'

import DrawerPage from '@/pages/drawer'
import Found from '@/pages/found'
import Account from '@/pages/account'

export type DrawerParamList = {
    Drawer: undefined;
    Found: undefined;
    Account: undefined;
}
const Drawer = createDrawerNavigator<DrawerParamList>();

export type RootDrawerNavigation = DrawerNavigationProp<DrawerParamList>

function AppDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#f8645c',
                drawerInactiveTintColor: '#333',
                headerShown: false,
                gestureEnabled: true
            }}

            // 自定义侧边栏
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Drawer"
                component={DrawerPage}
                options={{
                    title: '抽屉页',
                    drawerIcon: ({ color, size }) => (<AntDesign name='customerservice' size={size} style={{ color }} />)
                }}
            />
            <Drawer.Screen
                name="Found"
                component={Found}
                options={{
                    title: '发现',
                    drawerIcon: ({ color, size }) => (<AntDesign name='staro' size={size} style={{ color }} />)
                }}
            />
            <Drawer.Screen
                name="Account"
                component={Account}
                options={{
                    title: '我的',
                    drawerIcon: ({ color, size }) => (<AntDesign name='rest' size={size} style={{ color }} />)
                }}
            />
        </Drawer.Navigator>
    );
}

// 自定义侧边栏
function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#eee' }}>
            <SafeAreaView>
                <DrawerItem {...props}
                    label="Help"
                    icon={({ color, size }) => (<AntDesign name='rest' size={size} style={{ color }} />)}
                    onPress={() => console.log('Link to help')}
                />
                <DrawerItemList {...props} />
            </SafeAreaView>
        </DrawerContentScrollView>
    );
}


export default AppDrawer;


/* 5.x - 6.x差异统计 */
/*
*/