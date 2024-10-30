import { SimpleGrid, Text } from '@chakra-ui/react';
import { Meal } from '../types'
import MealCard from './MealCard';
import SkeletonCard from './skeletons/SkeletonCard';

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
  search: string;
}

function MainContent({ meals, loading, openRecipe, search }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (!meals) {
    meals = [];
  }
  return (
    <SimpleGrid p={5} columns={!loading && meals.length == 0 ? [1] : [2, null, 3]} spacing="20px">
      {loading && skeletons.map(s => <SkeletonCard key={s} />)}
      {!loading && meals.length == 0
        ? <Text>Recetas de "{search}" no encontradas...</Text>
        : meals.map(m =>
          <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meal={m} />)
      }
    </SimpleGrid>
  )
}

export default MainContent