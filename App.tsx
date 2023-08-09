import App from "./app/app"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import TrackPlayer from "react-native-track-player"

SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp

TrackPlayer.registerPlaybackService(() => require('./service'));

