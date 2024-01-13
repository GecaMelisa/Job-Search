import { useQuery } from "react-query";
import { JobService} from "../services";


const useJobs = () => {
   return useQuery('articles',
       () => JobService.getJobs()
   );
}


export default useJobs;