import { useMutation } from "react-query";
import axios from "axios";

const addJob = (job: any) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/jobs/createJob`, job);
};

export const useCreateJob = () => {
  return useMutation(addJob);
};
