import { NewRecipe } from "@app/containers";
import { Suspense } from "react";

export default function NewAdvert() {
  return (
    <Suspense>
      <NewRecipe.Form />
    </Suspense>
  );
}
