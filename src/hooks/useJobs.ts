import { useQuery } from "react-query";
import { JobService} from "../services";


const useJobs = () => {
   return useQuery('jobs',
       () => JobService.getJobs()
   );
}


export default useJobs;