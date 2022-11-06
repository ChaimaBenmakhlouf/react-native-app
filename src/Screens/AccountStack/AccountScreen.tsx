import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"

export default function AccountScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Account Screen</Text>
            <Button title="open full screen modal" onPress={() => {
                navigation.navigate('ExempleFullScreenModal');
            }}></Button>
        </View>
    );
}