import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ButtonItem = ({ button }: any) => {
  const handleButtonPress = (link: string) => {
    Linking.openURL(link).catch((err) =>
      console.error('Failed to open link:', err),
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(button.link)}
      >
        {button.id === 1 ? (
          <Image alt="icon" source={button.image} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name={button.icon} size={60} color="#fff" />
        )}
      </TouchableOpacity>
      <Text style={styles.label}>{button.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '45%',
    height: '30%',
    alignItems: 'center',
    marginBottom: '8%',
  },
  button: {
    width: '100%',
    height: 125,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c4a24',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#2c4a24',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default ButtonItem
