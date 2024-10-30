export type Category = {
    strCategory: string;
}
export type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string | number;
}

export type SearchForm = {
    search: string;
}

export type MealDetails = {
    [key: string]: string;
}