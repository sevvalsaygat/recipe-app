"use client";

import React from "react";

import { useRecipeStore } from "@app/stores";

type ListItemPropTypes = {
  recipe: RecipeType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ recipe }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div>
      <div>{recipe.title}</div>
      <div>{recipe.cookingTime}</div>
      <div>{recipe.cookingMethod}</div>
      <div>
        {recipe.materials.map((material, i) => {
          return (
            <div key={i}>
              <div>{material.name}</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          deleteRecipe(recipe.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
