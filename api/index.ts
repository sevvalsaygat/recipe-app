export interface MaterialType {
  name: string;
}

export interface IRecipeFormType {
  title: string;
  cookingTime: string;
  cookingMethod: string;
  materials: Array<
    {
      quantity: string;
    } & MaterialType
  >;
}

export interface ErrorResponseType {
  message: string;
}

export interface ListResponseType<T> {
  data: T[];
}
