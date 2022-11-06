import { View, Button, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function HomeScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => {
                navigation.navigate('HomeDetail');
            }}/>
        </View>
      );
}