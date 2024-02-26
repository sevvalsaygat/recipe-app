import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";

export default function useGetMaterials(
  options?: UseQueryOptions<
    ListResponseType<MaterialType>,
    AxiosError<ErrorResponseType>
  >
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetMaterials"],
    queryFn: () =>
      axiosInstance
        .get<ListResponseType<MaterialType>>("/api/materials")
        .then((response) => response.data),
    ...options,
  });
}
