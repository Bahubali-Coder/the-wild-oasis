import { useQuery } from "@tanstack/react-query";
import { getaCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ["cabins"], queryFn: getaCabins });

  return { isLoading, error, cabins };
}
