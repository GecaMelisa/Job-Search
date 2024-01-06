import { useQuery } from "react-query";
import { JobService} from "../services";


const useJobs = () => {
   return useQuery('books',
       () => JobService.getJobs()
   );
}


export default useJobs;