import React, {useState} from "react";
import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'




const App = () => {

  // color are define between a number from 0 to 256
  const [randomColor, setRandomColor] = useState("rgb(32, 0, 126)")

  const changeBg = () => {
    let randomNum1 = Math.floor(Math.random() * 256);
    let randomNum3 = Math.floor(Math.random() * 256);
    let randomNum2 = Math.floor(Math.random() * 256);

    const color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
    console.log("COLOR", color)
    setRandomColor(color)
  }

  return (<View style={[styles.container, {backgroundColor: randomColor}]} >
    <TouchableOpacity onPress={changeBg}  >

       <Text style={styles.text} >Click to change color</Text>
    </TouchableOpacity>
  </View>)
}

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  
})