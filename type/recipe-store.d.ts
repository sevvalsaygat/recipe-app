type RecipeType = {
  id: string;
  title: string;
  cookingTime: string;
  cookingMethod: string;
  materials: Array<
    {
      quantity: number;
    } & MaterialType
  >;
};

type MaterialType = {
  name: string;
};

type IRecipeFormType = {
  title: string;
  cookingTime: string;
  cookingMethod: string;
  materials: Array<
    {
      quantity: number;
    } & MaterialType
  >;
};

type ErrorResponseType = {
  message: string;
};

type ListResponseType<T> = {
  data: T[];
};
