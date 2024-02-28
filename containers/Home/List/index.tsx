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
    <div className="w-screen grid grid-cols-3 px-24 gap-5 mx-24 mt-28">
      {recipes.map((recipe, i) => {
        return (
          <div
            key={i}
            className="flex flex-row border border-t-8 border-amber-500 hover:bg-orange-100 h-full w-full rounded-xl pl-10 py-3 pr-5"
          >
            <ListItem recipe={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
