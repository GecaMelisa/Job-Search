import { useQuery } from "react-query";
import { ApplicationService, JobService} from "../services";


const useMyApplictions = () => {
   return useQuery('myApplications',
       () => ApplicationService.getMyApplications()
   );
}


export default useMyApplictions;