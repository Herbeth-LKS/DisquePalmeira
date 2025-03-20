import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Header from '../Home/components/Header'
import SearchBar from '../Home/components/SearchBar'
import Navbar from '@/components/Navbar'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewsCard = ({ title, description, imageUrl }: any) => {
  return (
    <View style={styles.newsCard}>
      <Image
        alt={'newsImage'}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={styles.newsImage}
      />
      <Text style={styles.newsTitle}>{title}</Text>
      <Text style={styles.newsDescription}>{description}</Text>
    </View>
  )
}

const InitialScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <View style={styles.mainContainer}>
        <Header />
        <SearchBar onSearch={setSearchQuery} />
        <View style={styles.container}>
          <NewsCard
            title="Título da Notícia"
            description="Esta é uma descrição de exemplo para o card de notícia."
            imageUrl="https://via.placeholder.com/150"
          />
        </View>
      </View>
      <Navbar />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    maxWidth: 300,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
  },
})

export default InitialScreen
