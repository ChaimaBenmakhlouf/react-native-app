import { View, Button, Text, ActivityIndicator, FlatList } from "react-native"
import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native"

export default function UserScreen() {
  
  let navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  
  const addUser = async () => {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const json = await response.json();
    
    setData((data)=>[...data, ...json.results]) 
  };
  const getUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    {isLoading ? <ActivityIndicator/> : (
      
      <FlatList
      data={data}
      keyExtractor={(item, index) => {console.log("id", item.login.uuid)
      return item.login.uuid}}
      onRefresh= {() => getUsers()}
      refreshing={isLoading}
      
      
      renderItem={({ item }) => (
        
        <Text style={{ marginTop: 10 }}>Person : {item.name.first} <Button title="Go to Details" onPress={() => {
          navigation.navigate('UserDetail',{
            otherParam: item
          });
          
        }}/>
        
        </Text>
      )}
        ListFooterComponent= {() =><Button title="clear" onPress={() => {
          setData([])
          
          
        }}/>}
        
        ListEmptyComponent= {() => <Text> No user was loaded...</Text>}
        ListHeaderComponent= {() => <Button title="add user" onPress={addUser}/>}
        />
        
    )}
        
    </View>
  );
        
}
      