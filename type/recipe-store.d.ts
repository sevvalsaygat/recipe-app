interface RecipeType {
  id: string;
  title: string;
  cookingTime: string;
  cookingMethod: string;
  materials: Array<
    {
      quantity: number;
    } & MaterialType
  >;
}

interface MaterialType {
  name: string;
}

interface IRecipeFormType {
  title: string;
  cookingTime: string;
  cookingMethod: string;
  materials: Array<
    {
      quantity: number;
    } & MaterialType
  >;
}

interface ErrorResponseType {
  message: string;
}

interface ListResponseType<T> {
  data: T[];
}
