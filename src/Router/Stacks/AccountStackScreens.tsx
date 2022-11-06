import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../../Screens/AccountStack/AccountScreen';

const AccountStack = createNativeStackNavigator();

export default function AccountStackScreens() {
    return (
        <AccountStack.Navigator >
            <AccountStack.Screen name="Account" component={AccountScreen} />
        </AccountStack.Navigator>
    );
}