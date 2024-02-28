import axios from "axios";

export default function useAxios() {
  const instance = axios.create();

  return instance;
}
