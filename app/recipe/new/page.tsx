import Link from "next/link";

import { NewRecipe } from "@app/containers";

export default function NewAdvert() {
  return (
    <div>
      <Link href="/">
        <div className="mb-10">Recipe Page</div>
      </Link>
      <NewRecipe.Form />
    </div>
  );
}
