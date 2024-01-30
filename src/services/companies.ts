import { Company } from "../utils/types";
import appAxios from "./appAxios";

const addCompany = async (company: Company): Promise<Company> => {
    return appAxios.post('/api/comapnies/register', company).then(
        (response) => {
            const data = response.data;
            console.log("COMPANY ADDED IS ", data);
  
            return data;
        });
      }
      
      
export default {addCompany};
