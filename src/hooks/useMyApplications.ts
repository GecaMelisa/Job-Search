import { useQuery } from "react-query";
import { ApplicationService} from "../services";


const useMyApplictions = () => {
   return useQuery('myApplications',
       () => ApplicationService.getMyApplications()
   );
}


export default useMyApplictions;