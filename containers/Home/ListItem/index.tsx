"use client";

import React from "react";

import { useRecipeStore } from "@app/stores";
import { Icons } from "@app/components";
import Link from "next/link";

type ListItemPropTypes = {
  recipe: RecipeType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ recipe }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <div className="flex group/item flex-col justify-between w-full h-[400px] gap-4 p-6 cursor-pointer border border-t-8 border-amber-500 hover:bg-orange-100 rounded-xl">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row gap-2">
          <Icons.Recipe />
          <div className="font-serif text-xl text-yellow-900">
            {recipe.title}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button
            className="hidden group-hover/item:block top-0 border border-amber-950 h-fit p-2 rounded-full cursor-pointer hover:bg-orange-300"
            onClick={() => {
              deleteRecipe(recipe.id);
            }}
          >
            <Icons.Delete className="w-5 h-5 text-amber-950" />
          </button>
          <div className="flex items-center justify-center mt-1 border text-xs font-mono text-orange-900 border-orange-900 hover:bg-orange-300 h-fit rounded-xl p-2">
            <Link href={`/recipe/new?recipeId=${recipe.id}`}>Edit</Link>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto w-full h-full px-10 py-3 pr-28 border border-dashed border-yellow-900 ">
        {recipe.materials.map((material, i) => {
          return (
            <div className="flex flex-row items-center gap-2 mb-1" key={i}>
              <Icons.Food />
              <div className="font-mono text-sm text-orange-900">
                {material.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-5">
          <Icons.Time />
          <div className="font-mono text-xs text-orange-950">
            {recipe.cookingTime}
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 font-mono text-xs text-orange-950">
          <Icons.Cooking />
          <div className="font-mono text-xs text-orange-950">
            {recipe.cookingMethod}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
