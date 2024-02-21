import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { ListResponseType, MaterialType, ErrorResponseType } from "@api";

export default function useGetRecipes(
  options?: UseQueryOptions<
    ListResponseType<MaterialType>,
    AxiosError<ErrorResponseType>
  >
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetRecipes"],
    queryFn: () =>
      axiosInstance
        .get<ListResponseType<MaterialType>>("api/recipes")
        .then((response) => response.data),
    ...options,
  });
}
