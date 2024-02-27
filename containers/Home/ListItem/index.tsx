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
    </div>
  );
};

export default ListItem;
