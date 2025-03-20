import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { MainStackParamList } from '@/navigation/MainNavigator'

const Navbar = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>()

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('initial')}>
        <MaterialCommunityIcons name="menu" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})

export default Navbar
