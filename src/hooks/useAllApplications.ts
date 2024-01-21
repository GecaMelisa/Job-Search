import { useQuery } from "react-query";
import { ApplicationService, JobService} from "../services";


const useMyApplictions = () => {
   return useQuery('allApplications',
       () => ApplicationService.getAllApplications()
   );
}


export default useMyApplictions;