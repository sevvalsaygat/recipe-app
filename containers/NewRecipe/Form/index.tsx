"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm, useFieldArray, FormProvider } from "react-hook-form";

import { api } from "@app/hooks";
import { Button, Form as FormComponents, Icons } from "@app/components";
import { useRecipeStore } from "@app/stores";

type FormPropTypes = {};

const Form: React.FC<FormPropTypes> = () => {
  const { data: materialsData } = api.useGetMaterials();
  const router = useRouter();
  const useFormMethods = useForm<IRecipeFormType>({
    defaultValues: {
      title: "",
      cookingTime: "",
      cookingMethod: "",
      materials: [],
    },
  });

  const searchParams = useSearchParams();
  const { handleSubmit, reset, control, watch, setValue } = useFormMethods;
  const { fields, append, remove, update } = useFieldArray<IRecipeFormType>({
    control,
    name: "materials",
  });

  const { addRecipe, getById, editRecipe } = useRecipeStore((state) => state);

  const onSubmit = (data: IRecipeFormType) => {
    if (recipeId) {
      editRecipe(recipeId, data);
    } else {
      addRecipe(data);
    }
    reset();
    router.push("/");
  };
  const recipeId = searchParams.get("recipeId");

  useEffect(() => {
    if (!recipeId) {
      return;
    }

    const foundRecipe = getById(recipeId);
    if (!foundRecipe) {
      router.push("/");
    }

    setValue("title", foundRecipe?.title!);
    setValue("cookingTime", foundRecipe?.cookingTime!);
    setValue("cookingMethod", foundRecipe?.cookingMethod!);
    setValue("materials", foundRecipe?.materials!);
  }, [recipeId, getById, router]);

  const watchTitle = watch("title");
  const watchCookingTime = watch("cookingTime");
  const watchCookingMethod = watch("cookingMethod");

  const onClickAddButton = (name: string) => {
    const foundMaterial = fields.find((material) => material.name === name);

    if (foundMaterial) {
      const foundMaterialIndex = fields.findIndex(
        (material) => material === foundMaterial
      );

      update(foundMaterialIndex, {
        ...foundMaterial,
        quantity: foundMaterial.quantity + 1,
      });

      return;
    }

    append({
      name: name,
      quantity: 1,
    });
  };

  const onClickDecreaseButton = (name: string) => {
    const foundMaterial = fields.find((material) => material.name === name);

    if (foundMaterial) {
      const foundMaterialIndex = fields.findIndex(
        (material) => material === foundMaterial
      );

      update(foundMaterialIndex, {
        ...foundMaterial,
        quantity: foundMaterial.quantity - 1,
      });

      return;
    }
  };

  return (
    <div className="w-full container mx-auto flex flex-row gap-24 mt-24">
      <div className="flex flex-col items-center w-2/3 gap-9">
        <FormProvider {...useFormMethods}>
          <div className="food-bar-bg flex flex-col px-11 py-8 border overflow-auto w-full h-80">
            {materialsData?.data.map((data, index) => {
              return (
                <div
                  className="flex flex-row text-white font-serif text-base items-center justify-between cursor-pointer bg-gray-800 bg-opacity-25 hover:bg-lime-700 hover:bg-opacity-75 pl-7 py-2"
                  key={index}
                >
                  <div>{data.name}</div>
                  <Icons.Plus
                    onClick={() => {
                      onClickAddButton(data.name);
                    }}
                    className="w-8 h-8 text-white mr-3 hover:text-gray-800"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-row gap-4 items-center justify-center">
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="title"
                  label="Recipe Title"
                  placeholder="(e.g. Spaghetti)"
                  rules={{ required: "This field is required!" }}
                />
              </div>
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="cookingTime"
                  label="Cooking Time"
                  placeholder="(e.g. 30 minutes)"
                  rules={{ required: "This field is required!" }}
                />
              </div>
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="cookingMethod"
                  label="Cooking Method"
                  placeholder="(e.g. Boil, Fry)"
                  rules={{ required: "This field is required!" }}
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="primary"
              className="w-full"
              title="Save Recipe"
            />
          </div>
        </FormProvider>
      </div>
      <div className="flex flex-col justify-between h-[50vh] w-1/3 bg-orange-50 rounded-2xl shadow-lg gap-8 p-10">
        <div className="h-10 text-lg font-mono text-orange-900 underline decoration-double">
          Title:{watchTitle}
        </div>
        <div className="flex flex-col h-full w-full overflow-y-auto border border-dashed border-yellow-900">
          {fields.map((field, index) => {
            return (
              <div
                className="flex flex-row items-center justify-between w-full gap-6 text-sm font-mono text-orange-700"
                key={index}
              >
                <div className="flex flex-row items-center w-full ">
                  <Icons.Cutlery />
                  {field.name} (x{field.quantity})
                </div>
                <Icons.Delete
                  onClick={() => {
                    remove(index);
                  }}
                  className="w-6 h-6 cursor-pointer text-red-700 hover:text-red-500"
                />
                <button
                  disabled={field.quantity === 1}
                  onClick={() => {
                    onClickDecreaseButton(field.name);
                  }}
                >
                  <Icons.MinusCircle className="w-7 h-7 cursor-pointer text-red-700 hover:text-red-500" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col h-16">
          <div className="text-sm font-serif text-orange-700 underline">
            Time:{watchCookingTime}
          </div>
          <div className="text-sm font-serif text-orange-700 underline">
            Method:{watchCookingMethod}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
