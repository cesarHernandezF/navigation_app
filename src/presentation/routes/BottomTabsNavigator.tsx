import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1Screen } from '../screens/tabs/Tabs1Screen';
import { Tabs2Screen } from '../screens/tabs/Tabs2Screen';
import { Tabs3Screen } from '../screens/tabs/Tabs3Screen';
import { Text } from 'react-native';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonicIcon } from '../components/shared/IonicIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                sceneStyle: {
                    backgroundColor: globalColors.background
                },
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}>
            <Tab.Screen
                name="Tab1"
                options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonicIcon name='accessibility-outline' color={color} />) }}
                component={Tabs1Screen} />

            <Tab.Screen
                name="Tab2"
                options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonicIcon name='airplane-outline' color={color} />) }}
                component={TopTabsNavigator} />

            <Tab.Screen
                name="Tab3"
                options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonicIcon name='bar-chart-outline' color={color} />) }}
                component={StackNavigator} />

        </Tab.Navigator>
    );
}