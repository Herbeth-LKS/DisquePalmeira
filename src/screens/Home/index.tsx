import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'

const buttons = [
  {
    id: 1,
    image: require('./assets/palmeira.png'),
    label: 'Botão 1',
    link: 'https://example.com/1',
  },
  {
    id: 2,
    image: require('./assets/palmeira.png'),
    label: 'Botão 2',
    link: 'https://example.com/2',
  },
  {
    id: 3,
    image: require('./assets/palmeira.png'),
    label: 'Botão 3',
    link: 'https://example.com/3',
  },
  {
    id: 4,
    image: require('./assets/palmeira.png'),
    label: 'Botão 4',
    link: 'https://example.com/4',
  },
  {
    id: 5,
    image: require('./assets/palmeira.png'),
    label: 'Botão 5',
    link: 'https://example.com/5',
  },
  {
    id: 6,
    image: require('./assets/palmeira.png'),
    label: 'Botão 6',
    link: 'https://example.com/6',
  },
]

const HomeScreen = () => {
  const handleButtonPress = (link: string) => {
    Linking.openURL(link).catch((err) =>
      console.error('Failed to open link:', err),
    )
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Disque Palmeira:</Text>

        <Image
          alt="icon"
          source={require('./assets/palmeira.png')}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.container}>
        {/* Grade de botões 2x3 */}
        <View style={styles.grid}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.id}
              style={styles.button}
              onPress={() => handleButtonPress(button.link)}
            >
              <Image alt="icon" source={button.image} style={styles.image} />
              <Text style={styles.label}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#2c4a24',
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#2c4a24',
    borderRadius: 50,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    width: '45%',
    height: '28%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c4a24',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: '8%',
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default HomeScreen
