"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useForm, useFieldArray, FormProvider } from "react-hook-form";

import { api } from "@app/hooks";
import { Button, Form as FormComponents } from "@app/components";
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
    console.log("On submit calıstı, formdan gelen data = ", data);

    try {
      addRecipe(data);
      reset();
      ("Başarılı bir şekilde eklendi.");
      router.push("/");
    } catch (error) {
      ("Bir hata oluştu.");
    }
  };

  const watchTitle = watch("title");
  const watchCookingTime = watch("cookingTime");
  const watchCookingMethod = watch("cookingMethod");

  return (
    <div className="w-full flex flex-row">
      <div className="flex flex-col items-center w-1/2">
        <FormProvider {...useFormMethods}>
          <div className="flex flex-col px-11 py-8 border overflow-auto w-3/4 h-72 my-20">
            {materialsData?.data.map((data, index) => {
              return (
                <div
                  className="flex flex-row justify-between cursor-pointer hover:bg-gray-200 pl-3 py-2"
                  key={index}
                >
                  <div>{data.name}</div>
                  <Button
                    onClick={() => {
                      append({
                        name: data.name,
                        quantity: 1,
                      });
                    }}
                    title="+"
                    className="px-3 border bg-red-500"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-4 ml-5">
            <div>
              <FormComponents.Input
                variant="primary"
                name="title"
                label="Recipe Title"
              />
            </div>
            <div>
              <FormComponents.Input
                variant="primary"
                name="cookingTime"
                label="Cooking Time"
              />
            </div>
            <div>
              <FormComponents.Input
                variant="primary"
                name="cookingMethod"
                label="Cooking Method"
              />
            </div>
          </div>
        </FormProvider>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          className="w-full ml-5"
          title="save"
        />
      </div>
      <div className="flex flex-row w-1/2 mx-28 mt-16 border">
        <div className="flex flex-col px-20 mt-7">
          <div className="mb-10">{watchTitle}</div>
          <div className="flex flex-col h-52 overflow-x-auto pr-9 ">
            {fields.map((field, index) => {
              return <div key={index}>{field.name}</div>;
            })}
          </div>
          <div>{watchCookingTime}</div>
          <div>{watchCookingMethod}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
