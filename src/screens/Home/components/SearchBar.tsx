import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const SearchBar = ({ onSearch }: any) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (text: string) => {
    setSearchQuery(text)
    onSearch(text)
  }

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#2c4a24',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
})

export default SearchBar
