import { JobService } from "../services"
import { Job } from "../utils/types"
import { useQuery, useMutation } from "react-query";
import axios from 'axios';

const addJob = (job: any) => {
    return axios.post("http://localhost:8080/api/jobs/createJob", job);
}

export const useCreateJob = () => {
    return useMutation(addJob)
}