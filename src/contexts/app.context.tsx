/* eslint-disable jsx-a11y/alt-text */
import Popup, { PopupFeedbackMessage } from '@/components/Popup/Popup'

import React, { createContext, useEffect, useState } from 'react'
import { StyleSheet, View, Image, Keyboard } from 'react-native'

type AsyncBooleanFunction = () => Promise<boolean>

type AppContextType = {
  loading: boolean
  setLoading: (loading: boolean) => void
  menuVisible: boolean
  setMenuVisible: (visible: boolean) => void
  onMenuBottomNavigation: AsyncBooleanFunction
  setOnMenuBottomNavigation: (
    onMenuBottomNavigation: AsyncBooleanFunction | undefined,
  ) => void
  popup: PopupFeedbackMessage | null
  showPopup: (popup: PopupFeedbackMessage) => void
  hidePopup: () => void
  isKeyboardVisible: boolean
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AppContext = createContext({} as AppContextType)

export function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [menuVisible, setMenuVisible] = useState<boolean>(true)
  const [popup, setPopup] = useState<PopupFeedbackMessage | null>(null)

  const [onMenuBottomNavigation, setOnMenuBottomNavigation] = useState<any>()
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false)

  const showPopup = (popup: PopupFeedbackMessage) => setPopup(popup)
  const hidePopup = () => setPopup(null)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true)
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false)
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        isKeyboardVisible,
        popup,
        loading,
        setLoading,
        menuVisible,
        setMenuVisible,
        showPopup,
        hidePopup,

        onMenuBottomNavigation,
        setOnMenuBottomNavigation,
      }}
    >
      {loading && <Loading />}
      {popup && (
        <Popup
          visible={true}
          title={popup.title}
          message={popup.message}
          onClose={hidePopup}
          buttons={popup.buttons}
        />
      )}
      {children}
    </AppContext.Provider>
  )
}

function Loading() {
  return (
    <View style={styles.container}>
      <Image
        height={10}
        width={10}
        style={styles.icon}
        source={require('../assets/images/loading-spinner.gif')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
