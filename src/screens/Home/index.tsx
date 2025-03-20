import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ButtonGrid from './components/ButtonGrid'
import Navbar from '@/components/Navbar'

const buttons = [
  {
    id: 1,
    image: require('./assets/palmeira.png'),
    label: 'Nova denúncia',
    link: 'https://example.com/1',
  },
  {
    id: 2,
    icon: 'directions',
    label: 'MIQCB - São Luís',
    link: 'https://www.google.com/maps/search/?api=1&query=FM8W%2BP8%20Centro%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA',
  },
  {
    id: 3,
    icon: 'web',
    label: 'Nosso site',
    link: 'https://miqcb.org.br/',
  },
  {
    id: 4,
    icon: 'phone',
    label: 'Fale conosco',
    link: 'tel:9832683357',
  },
  {
    id: 5,
    icon: 'instagram',
    label: 'Instagram',
    link: 'https://www.instagram.com/miqcb_',
  },
  {
    id: 6,
    icon: 'email',
    label: 'E-mail',
    link: 'mailto:miqcb@miqcb.org.br?subject=Denuncia&body=Olá, preciso de ajuda com...',
  },
]

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredButtons = buttons.filter((button) =>
    button.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <View style={styles.mainContainer}>
        <Header />
        <SearchBar onSearch={setSearchQuery} />
        <View style={styles.container}>
          <ButtonGrid buttons={filteredButtons} />
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
})

export default HomeScreen
