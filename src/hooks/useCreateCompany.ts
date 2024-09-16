import { useMutation } from "react-query";
import axios from "axios";

const addCompany = (company: any) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/companies/register`,
    company
  );
};

export const useCreateCompany = () => {
  return useMutation(addCompany);
};
