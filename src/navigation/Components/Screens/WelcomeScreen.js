import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center"}}>
     <Image source={require('../../assets/images/welcomeScreen.png')}/>
     <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold"}}>40K+ premium Cuisine</Text>
     <Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cook Like A Chef
			</Text>
            <TouchableOpacity onPress={() => navigation.navigate("RecipeList")}
            style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}>
                <Text  style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Let's Dive</Text>
            </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen