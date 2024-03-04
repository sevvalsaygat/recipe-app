"use client";

import React from "react";
import { useRouter } from "next/navigation";

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

  const { handleSubmit, reset, control, watch } = useFormMethods;
  const { fields, append } = useFieldArray<IRecipeFormType>({
    control,
    name: "materials",
  });

  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const onSubmit = (data: IRecipeFormType) => {
    try {
      addRecipe(data);
      reset();
      ("Created successfully.");
      router.push("/");
    } catch (error) {
      ("Something went wrong.");
    }
  };

  const watchTitle = watch("title");
  const watchCookingTime = watch("cookingTime");
  const watchCookingMethod = watch("cookingMethod");

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col items-center w-2/3">
        <FormProvider {...useFormMethods}>
          <div className="food-bar-bg flex flex-col px-11 py-8 border overflow-auto w-3/4 h-80 my-20">
            {materialsData?.data.map((data, index) => {
              return (
                <div
                  className="flex flex-row text-white font-serif text-base items-center justify-between cursor-pointer bg-gray-800 bg-opacity-25 hover:bg-lime-700 hover:bg-opacity-75 pl-7 py-2"
                  key={index}
                >
                  <div>{data.name}</div>
                  <Icons.Plus
                    onClick={() => {
                      append({
                        name: data.name,
                        quantity: 1,
                      });
                    }}
                    className="w-8 h-8 text-white mr-3 hover:text-gray-800"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-2/3">
            <div className="flex flex-row gap-4 items-center justify-center">
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="title"
                  label="Recipe Title"
                  placeholder="(e.g. Spaghetti)"
                />
              </div>
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="cookingTime"
                  label="Cooking Time"
                  placeholder="(e.g. 30 minutes)"
                />
              </div>
              <div>
                <FormComponents.Input
                  variant="primary"
                  name="cookingMethod"
                  label="Cooking Method"
                  placeholder="(e.g. Boil, Fry)"
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
      <div className="flex flex-row w-1/3 mx-28 mt-16 bg-orange-50 rounded-2xl shadow-lg">
        <div className="flex flex-col px-20 justify-between">
          <div className="flex flex-col mt-7">
            <div className="mb-10 pb-1 text-lg font-mono text-orange-900 underline decoration-double">
              {watchTitle}
            </div>
            <div className="flex flex-col h-72 overflow-x-auto pr-9">
              {fields.map((field, index) => {
                return (
                  <div
                    className="flex flex-row items-center gap-2 text-sm font-mono text-orange-700"
                    key={index}
                  >
                    <Icons.Cutlery />
                    {field.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mb-24">
            <div className="text-sm font-serif text-orange-700 underline">
              {watchCookingTime}
            </div>
            <div className="text-sm font-serif text-orange-700 underline">
              {watchCookingMethod}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
