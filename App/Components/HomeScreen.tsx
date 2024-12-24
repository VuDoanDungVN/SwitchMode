import { View, Text, Switch, StyleSheet } from 'react-native'
import React from 'react'
import  { useTheme } from './ThemeProvider';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
    const {theme, toggleTheme} = useTheme();
    const isDarkMode = theme === "dark";

  return (
<View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
    <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>{isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
    <View style={styles.switchContainer}>
        <Icon name={isDarkMode ? "weather-night" : "weather-sunny"} size={30} color={isDarkMode ? "#fff" : "#000"}/>
        <Switch
        trackColor={{false : "#757577", true : "#81b0ff"}}
        thumbColor={isDarkMode ? "#f5bb4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkMode}
        style={styles.switch}
        />
    </View>
</View>
  )
}

export default HomeScreen

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent:"center", 
        alignItems:"center",
        alignContent:"center"
    }, 
    switch :{
        transform: [{scaleX: 1.2},{scaleY: 1.2}]
    },
    text : {
        fontSize: 24,
        marginBottom: 20
    },
    darkText :{
        color: "#fff"
    },
    lightText:{
        color:"#000"
    },
    darkContainer : {
        backgroundColor:"#333"
    },
    lightContainer : {
        backgroundColor:"#fff"
    },
    switchContainer : {
        flexDirection:"column",
        alignItems:"center",
        gap:10
    }
})