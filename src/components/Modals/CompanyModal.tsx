import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateCompany } from '../../hooks/useCreateCompany';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { toast } from 'react-toastify';

type Props = {
  onCancel: () => void;
};

export type CompanyCreation = {
  companyName: string;
  companyOwnerId: string;
  address: string;
  phone: string;
  email: string;
};

const CompanyModal: React.FC<Props> = ({ onCancel }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CompanyCreation>({});
  const [companyName, setCompanyName] = useState('');
  const [companyOwnerId, setCompanyOwnerId] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { mutate: addCompany } = useCreateCompany();

  const handleCreateCompany = async () => {
    if (!companyName || !companyOwnerId || !address || !phone || !email) {
      toast.error('Please enter all required fields');
      return;
    }
    const company = { companyName, companyOwnerId, address, phone, email };
    addCompany(company);
    toast.success('Company created successfully');
    onCancel();
    
  };

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>Create a New Company</DialogTitle>
      <DialogContent>
      <form onSubmit={handleSubmit(handleCreateCompany)}>
          <TextField
            label="Company Name"
            variant="outlined"
            {...register('companyName', { required: 'This field is required' })}
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Company Owner Id"
            variant="outlined"
            {...register('companyOwnerId', { required: 'This field is required' })}
            error={!!errors.companyOwnerId}
            helperText={errors.companyOwnerId?.message}
            value={companyOwnerId}
            onChange={(e) => setCompanyOwnerId(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Address"
            variant="outlined"
            {...register('address', { required: 'This field is required' })}
            error={!!errors.address}
            helperText={errors.address?.message}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Phone"
            variant="outlined"
            {...register('phone', { required: 'This field is required' })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            variant="outlined"
            {...register('email', { required: 'This field is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />

        <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2  }}>
           <Button onClick={onCancel} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '130px', height: '45px' }}>
              Cancel
            </Button>
            <Button onClick={handleCreateCompany} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '130px', height: '45px' }}>
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyModal;
