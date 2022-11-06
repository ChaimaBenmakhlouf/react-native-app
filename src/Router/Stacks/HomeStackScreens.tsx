import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeStack/HomeScreen';
import HomeDetailScreen from '../../Screens/HomeStack/HomeDetailScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreens() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="HomeDetail" component={HomeDetailScreen} />
        </HomeStack.Navigator>
    );
}