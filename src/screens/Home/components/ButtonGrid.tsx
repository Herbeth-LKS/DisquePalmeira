import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ButtonItem from './ButtonItem'

const ButtonGrid = ({ buttons }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {buttons.map((button: any) => (
          <ButtonItem key={button.id} button={button} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
})

export default ButtonGrid
