import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
//import { toast } from 'react-toastify';

type Props = {
    isOpen: boolean;
    onCancel: () => void;
    onSubmitJob: (formData: JobUpdate) => void;
    initialJobData: JobUpdate;
  };

export type JobUpdate = {
  jobId: string;
  companyName: string;
  deadline: string;
  description: string;
  jobType: string;
  location: string;
  position: string;
  postedDate: string;
  requirements: string[];
  salary: string;
  statusRequest: string;
};

const UpdateJobModal: React.FC<Props> = ({ isOpen, onCancel, onSubmitJob, initialJobData }: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<JobUpdate>({});
  const [position, setPosition] = useState(initialJobData.position);
  const [description, setDescription] = useState(initialJobData.description);
  const [location, setLocation] = useState(initialJobData.location);
  const [jobType, setJobType] = useState(initialJobData.jobType);
  const [requirements, setRequirements] = useState<string[]>(initialJobData.requirements); // Ispravljeno
  const [salary, setSalary] = useState(initialJobData.salary);
  const [deadline, setDeadline] = useState(initialJobData.deadline);

  useEffect(() => {
    // Reset the form fields when the initialJobData changes
    reset({
      position: initialJobData.position,
      description: initialJobData.description,
      location: initialJobData.location,
      jobType: initialJobData.jobType,
      requirements: initialJobData.requirements, // Ispravljeno
      salary: initialJobData.salary,
      deadline: initialJobData.deadline,
    });
  }, [initialJobData, reset]);

  const handleUpdateJob = (data: JobUpdate) => {
    // Validate and submit the updated job data
    const updatedJob: JobUpdate = {
      ...initialJobData,
      position,
      description,
      location,
      jobType,
      requirements: data.requirements.map(item => item.trim()), 
      salary,
      deadline,
    };

    onSubmitJob(updatedJob);
    //toast.success('Job updated successfully');

    onCancel();
  };

  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>Edit Job</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleUpdateJob)}>

        <TextField
            label="Position"
            variant="outlined"
            {...register('position', { required: 'This field is required' })}
            error={!!errors.position}
            helperText={errors.position?.message}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description"
            variant="outlined"
            {...register('description', { required: 'This field is required' })}
            error={!!errors.description}
            helperText={errors.description?.message}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Location"
            variant="outlined"
            {...register('location', { required: 'This field is required' })}
            error={!!errors.location}
            helperText={errors.location?.message}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Job Type"
            variant="outlined"
            {...register('jobType', { required: 'This field is required' })}
            error={!!errors.jobType}
            helperText={errors.jobType?.message}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Salary"
            variant="outlined"
            {...register('salary', { required: 'This field is required' })}
            error={!!errors.salary}
            helperText={errors.salary?.message}
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Requirements"
            variant="outlined"
            {...register('requirements', { required: 'This field is required' })}
            error={!!errors.requirements}
            helperText={errors.requirements?.message}
            value={requirements.join(', ')} // Convert the array to a string for display
            onChange={(e) => setRequirements(e.target.value.split(',').map(item => item.trim()))} // Split the string into an array            fullWidth
            margin="normal"
          />

          <TextField
            label="Deadline"
            variant="outlined"
            {...register('deadline', { required: 'This field is required' })}
            error={!!errors.deadline}
            helperText={errors.deadline?.message}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            fullWidth
            margin="normal"
          />



          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button onClick={onCancel} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '120px', height: '40px' }}>
              Cancel
            </Button>
            <Button type="submit" sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px' }}>
              Update
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateJobModal;
