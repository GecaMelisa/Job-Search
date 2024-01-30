// hooks/useDeleteJob.js
import { useMutation, useQueryClient } from 'react-query';
import { JobService } from '../services';

const useDeleteJob = () => {
  const queryClient = useQueryClient();

  const deleteJob = async (jobId: String) => {
    await JobService.deleteJob(jobId);
  };

  return useMutation(deleteJob, {
    onSuccess: () => {
      queryClient.invalidateQueries('jobs'); // Ovdje "jobs" je ključ za query koji želite invalidirati
    },
  });
};

export default useDeleteJob;
