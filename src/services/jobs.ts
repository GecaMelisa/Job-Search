import appAxios from "./appAxios";
import { Job } from "../utils/types";


const getJobs = async (): Promise<Job[]> => {
   return appAxios.get(`/jobs/`).then(
       (response) => {
           const data = response.data;
           console.log(data);


           return data;
       });
}


export default { getJobs };