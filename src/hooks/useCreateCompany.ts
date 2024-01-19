import { CompanyService } from "../services";
import { Company } from "../utils/types"
import { useQuery, useMutation } from "react-query";
import axios from 'axios';

const addCompany = (company: any) => {
    return axios.post("http://localhost:8080/api/companies/register", company);
}

export const useCreateCompany= () => {
    return useMutation(addCompany)
}