import { useMutation, useQueryClient } from 'react-query';
import { JobService } from '../services';
import { Job } from '../utils/types';

const useCreateJob = () => {
    const queryClient = useQueryClient();
    return useMutation((data: Job) => JobService.addJob(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('jobs');
        },
    });
};

export default useCreateJob;