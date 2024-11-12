import { ModalHeader, ModalCloseButton, ModalBody, Heading, Image, Text, OrderedList, ListItem } from "@chakra-ui/react";
import { MealDetails } from "../types";
import { primary } from "../assets/colors";

type Props = {
    data: MealDetails;
}

const joinIngredientes = (data: MealDetails) => {
    let ingredientes = [];
    for (let index = 1; index <= 20; index++) {
        const ingredient = data[`strIngredient${index}`];
        const measure = data[`strMeasure${index}`];
        if (ingredient !== "") {
            ingredientes.push(`${ingredient} - ${measure}`);
        }
    }
    return ingredientes;
}

function RecipeModalContent({ data }: Props) {
    return (
        <>
            <ModalHeader color={primary} fontWeight="bold" pb={2}>{data.strMeal}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Image
                    alt={data.strMeal}
                    width="100%"
                    borderRadius="lg"
                    src={data.strMealThumb}
                />
                <Heading color={primary} mt={4} mb={4} size="md">Ingredients</Heading>
                <OrderedList>
                    {joinIngredientes(data).map((i) => <ListItem key={i}>{i}</ListItem>)}
                </OrderedList>
                <Heading color={primary} mt={4} mb={4} size="md">Instructions</Heading>
                <Text whiteSpace="pre-line">{data.strInstructions}</Text>
            </ModalBody>
        </>
    )
}

export default RecipeModalContent