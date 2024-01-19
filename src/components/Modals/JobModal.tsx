import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateJob } from '../../hooks/useCreateJob';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Box, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import * as yup from 'yup';


type Props = {
  onCancel: () => void;
  onSubmitJob: (formData: JobCreation) => void;
};

export type JobCreation = {
  id: string;
  companyId: string;
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

const JobModal: React.FC<Props> = ({ onCancel }: Props) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<JobCreation>({});
  const [companyName, setCompanyName] = useState ('');
  const [position, setPosition] = useState ('');
  const [description, setDescription] = useState ('');
  const [location, setLocation] = useState ('');
  const [jobType, setJobType] = useState ('');
  const [requirements, setRequirements] = useState ('');
  const [salary, setSalary] = useState ('');
  const [deadline, setDeadline] = useState ('');
  const [companyId, setCompanyId] = useState ('');

  const {mutate: addJob} = useCreateJob()


  const [formData, setFormData] = useState<JobCreation>({
    id:  '',
    companyId: '',
    companyName: '',
    deadline: '',
    description: '',
    jobType: '',
    location: '',
    position: '',
    postedDate: '',
    requirements: [],
    salary: '',
    statusRequest: '',
  });
  const schema = yup
  .object({
    companyId: yup.string().required('This filed is required.'),
    companyName: yup.string().required('This filed is required'),
    deadline:yup.string().required('This filed is required.'),
    description: yup.string().required('This filed is required.'),
    jobType: yup.string().required('This filed is required.'),
    location: yup.string().required('This filed is required.'),
    position: yup.string().required('This filed is required.'),
    requirements: yup.string().required('This filed is required.'),
    salary: yup.string().required('This filed is required.')
  })
  .required();

  const createJobMutation = useCreateJob();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateJob = async () => {
   console.log({companyId,position, description, location, jobType, salary, requirements, deadline})
   const job = {companyId, position, description, location, salary, jobType, requirements: requirements.split(',').map(item => item.trim()), deadline}
   addJob(job)
   toast.success('Application submitted successfully');

  };

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>Create a New Job</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleCreateJob)}>
    
        <TextField
            label="Company Id"
            variant="outlined"
            {...register('companyId', { required: 'This field is required' })}
            error={!!errors.companyId}
            helperText={errors.companyId?.message}
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            fullWidth
            margin="normal"

          />
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
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            fullWidth
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
            <Button onClick={handleCreateJob} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px' }}>
              Create
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
