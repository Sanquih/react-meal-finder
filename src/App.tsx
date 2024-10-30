import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useState } from "react"
import { Category, Meal, MealDetails, SearchForm } from "./types"
import useGetData from "./hooks/useGetData"
import { lightSecondary, primary, secondary } from "./assets/colors"
import RecipeModal from "./components/RecipeModal"
import useFetch from "./hooks/useFetch"
import axios from "axios"

const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

const makeMealUrl = (category: Category) => {
  if (category.strCategory != "") {
    return `${baseUrl}filter.php?c=${category.strCategory}`;
  }
}

const defaulCategory = { strCategory: "Beef" };

function App() {

  const { isOpen, onClose, onOpen } = useDisclosure()

  const [selectedCategory, setSelectedCategory] = useState<Category>(defaulCategory);

  const [resetTrigger, setResetTrigger] = useState(false);
  const triggerReset = () => {
    setResetTrigger(prev => !prev);
  };

  const { loading, data } = useGetData<Category>(`${baseUrl}list.php?c=list`);

  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeal,
    setLoading
  } = useGetData<Meal>(makeMealUrl(selectedCategory));

  const [lastSearch, setLastSearch] = useState<string>("");
  const searchApi = (searchForm: SearchForm) => {
    setSelectedCategory({ strCategory: "" })
    setLastSearch(searchForm.search);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`;
    setLoading(true)
    axios.get<{ meals: Meal[] }>(url)
      .then(({ data }) => setMeal(data.meals))
      .finally(() => setLoading(false));
  };

  const { loading: loadingMealDetails, data: dataMealDetails, fetch } = useFetch<MealDetails>();
  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
  }

  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateRows={'60px 1fr'}
        gridTemplateColumns={{ sm: '0 1fr', md: "250px 1fr" }}
        fontSize={14}
      >
        <GridItem
          boxShadow="lg"
          pos="sticky"
          top="0"
          left="0"
          zIndex="1"
          pl='2'
          bg={primary}
          area={'header'}
        >
          <Header onSubmit={searchApi} resetTrigger={resetTrigger} />
        </GridItem>
        <GridItem
          boxShadow="lg"
          pos="sticky"
          top="60px"
          left="0"
          p='5'
          bg={secondary}
          area={'nav'}
          height="calc(100vh - 60px)"
          overflowY="auto"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onReset={triggerReset}
          />
        </GridItem>
        <GridItem pl='2' bg={lightSecondary} area={'main'}>
          <MainContent
            openRecipe={searchMealDetails}
            meals={dataMeal}
            loading={loadingMeal}
            search={lastSearch}
          />
        </GridItem>
      </Grid>
      <RecipeModal
        isOpen={isOpen}
        onClose={onClose}
        loading={loadingMealDetails}
        data={dataMealDetails}
      />
    </>
  )
}

export default App
