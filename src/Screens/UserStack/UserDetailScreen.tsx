import { View, Text, Image } from "react-native"
import UserScreen from  './UserStack/UserScreen';


export default function UserDetailScreen({route, navigation}) {
    const { otherParam } = route.params;
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
            <Image style={{ width: 150, height: 150, borderRadius: 400/ 2, marginBottom: 20 }} source={{uri:otherParam.picture.large}} />
            <Text style={{ marginBottom: 20, fontSize: 20 }}> {otherParam.name.last}  {otherParam.name.first} </Text>
            <Text> Email : {otherParam.email}</Text>
            <Text> Gender : {otherParam.gender}</Text>

        </View>
    );
    }