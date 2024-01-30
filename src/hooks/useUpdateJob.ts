import { JobService } from "../services";
import { Job } from "../utils/types";

import { useMutation, useQueryClient } from "react-query";

export function useUpdateJob(){
    const queryClinet=useQueryClient();
    return useMutation({
        mutationFn:(job:Job)=>JobService.updateJob(job),
        onSettled: async(_, error, variables)=>{
            if(error){
                console.log(error);
            }
            else{
                await queryClinet.invalidateQueries({queryKey:["jobs"]});
                await queryClinet.invalidateQueries({queryKey:["jobs", {id:variables.jobId}]})
            }
        }
    })
}