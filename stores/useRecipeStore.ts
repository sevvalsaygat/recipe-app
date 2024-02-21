import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { IRecipeFormType } from "@api";

type UseRecipeStoreType = {
  recipes: IRecipeFormType[];
  addRecipe: (recipe: IRecipeFormType) => void;
  deleteRecipe: (recipe: IRecipeFormType) => void;
};

const useRecipeStoreType = create<UseRecipeStoreType>()(
  devtools(
    persist(
      (set) => ({
        recipes: [],
        addRecipe: (recipe) =>
          set((state) => ({
            recipes: [...state.recipes, recipe],
          })),
        deleteRecipe: (recipe) => {
          set((state) => ({
            recipes: state.recipes.filter(
              (stateRecipe) => stateRecipe.title !== recipe.title
            ),
          }));
        },
      }),
      {
        skipHydration: true,
        name: "recipe-store",
      }
    )
  )
);

export default useRecipeStoreType;
