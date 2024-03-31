import { View, Text, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Header from '../Header'
import SearchFilter from '../SearchFilter';
import { items } from './Constant';
import CategoriesFilter from '../CategoriesFilter';


const allCategories=["all",...new Set(
  items.map((item)=>item.category)
)]


const RecipeListScreen = () => {
const[menuItems,setMenuItems]=useState(items);
const[activeCategory,setActiveCategory]=useState("");
const [categories, setCategories] = useState(allCategories);


const filterItems = (category) => {
  setActiveCategory(category);
  if (category === "all") {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};


  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
    {/* render header */}
    <Header headerText={"Hey! Niloy "} headerIcon={"bell-o"} />

    {/* Search Filter */}
    <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

    {/* Categories filter */}

    <View style={{ marginTop: 22 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
      {/* Categories list */}
      <CategoriesFilter categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
    </View>

    {/* Recipe List Filter */}

    <View style={{ marginTop: 22, flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
      {/* Recipes list */}

      <RecipeCard items={menuItems}/>
    </View>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({});
export default RecipeListScreen