import { View, Text, ScrollView } from 'react-native'
import React from 'react'


const CategoriesFilter = ({ categories, filterItems, activeCategory }) => {
  return (
    <View>
     <ScrollView>
        {
            categories.map((category,index)=>{
                return(<View>
                    <Text key={index} style={{color:`${activeCategory===category?"crimson":"black"}`}}
                     onPress={() => filterItems(category)}>{category.category}</Text>
                </View>)
            })
        }
     </ScrollView>
    </View>
  )
}

export default CategoriesFilter