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
    <div className="grid grid-cols-3 px-24 gap-5 mx-24 mt-28 mb-28">
      {recipes.map((recipe, i) => {
        return <ListItem key={i} recipe={recipe} />;
      })}
    </div>
  );
};

export default List;
