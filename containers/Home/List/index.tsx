"use client";

import React, { use, useEffect } from "react";

import ListItem from "../ListItem";
import { useRecipeStore } from "@/stores";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  useEffect(() => {
    useRecipeStore.persist.rehydrate();
  }, []);

  return (
    <div>
      <div>LIST</div>
      {recipes.map((recipe: RecipeType, i: number) => {
        return (
          <div key={i} className="border rounded-xl mb-5">
            <ListItem recipe={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
