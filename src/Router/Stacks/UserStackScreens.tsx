import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../../Screens/UserStack/UserScreen';
import UserDetailScreen from '../../Screens/UserStack/UserDetailScreen';

const UserStack = createNativeStackNavigator();

export default function UserStackScreens() {
    return (
        <UserStack.Navigator >
            <UserStack.Screen name="User" component={UserScreen} />
            <UserStack.Screen name="UserDetail" component={UserDetailScreen} />
        </UserStack.Navigator>
    );
}