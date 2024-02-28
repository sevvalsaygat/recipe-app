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
    <div className="grid grid-cols-3 px-24 gap-4 mx-24 mt-36">
      {recipes.map((recipe, i) => {
        return (
          <div
            key={i}
            className="flex flex-row border h-full w-full rounded-xl mb-5"
          >
            <ListItem recipe={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
