import { Card, CardBody, Image, Heading, Button, Text, CardFooter } from '@chakra-ui/react';
import { Meal } from '../types';
import { primary } from '../assets/colors';

type Props = {
  meal: Meal;
  openRecipe: ()=>void;
}

function MealCard({ meal, openRecipe }: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          borderRadius='lg'
        />
        <Heading mt={4} size='md' color={primary}><Text>{meal.strMeal}</Text></Heading>
      </CardBody>
      <CardFooter pt={0}>
        <Button onClick={openRecipe} variant='solid' color="white" bgColor={primary}>
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MealCard