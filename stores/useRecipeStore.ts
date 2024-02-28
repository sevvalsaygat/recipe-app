import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { nanoid } from "nanoid";

type UseRecipeStoreType = {
  recipes: RecipeType[];
  addRecipe: (data: IRecipeFormType) => void;
  deleteRecipe: (id: string) => void;
  getById: (id: string) => RecipeType | undefined;
};

const useRecipeStore = create<UseRecipeStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        recipes: [],
        addRecipe: (data) =>
          set((state) => ({
            recipes: [
              ...state.recipes,
              {
                ...data,
                id: nanoid(),
              },
            ],
          })),
        deleteRecipe: (id) =>
          set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
          })),
        getById: (id) => {
          return get().recipes.find((recipe: RecipeType) => recipe.id === id);
        },
      }),
      {
        skipHydration: true,
        name: "recipe-store",
      }
    )
  )
);

export default useRecipeStore;
