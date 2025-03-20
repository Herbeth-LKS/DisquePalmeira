import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Disque Palmeira:</Text>
        <Text style={styles.subtitle}>Sua denúncia, nossa resistência!</Text>
      </View>
      <Image
        alt="icon"
        source={require('../assets/icon.png')}
        style={styles.headerImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c4a24',
  },
  subtitle: {
    fontSize: 16,
    color: '#2c4a24',
    fontStyle: 'italic',
    marginTop: 5,
  },
  headerImage: {
    width: 80,
    height: 80,
    marginLeft: 50,
    resizeMode: 'contain',
    backgroundColor: '#2c4a24',
    borderRadius: 50,
  },
})

export default Header
