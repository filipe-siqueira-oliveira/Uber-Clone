import { Icon } from '@rneui/themed';
import tw from 'tailwind-react-native-classnames'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eats", // Change in future...
  },
]

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-36`}
        >
          <View>

            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type='antdesign' 
              color="white" 
              name='arrowright'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
