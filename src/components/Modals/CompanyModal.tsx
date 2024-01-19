import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateCompany } from '../../hooks/useCreateCompany';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

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
    const company: CompanyCreation = { companyName, companyOwnerId, address, phone, email };
    addCompany(company);
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

          <DialogActions>
            <Button onClick={handleCreateCompany} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px' }}>
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyModal;
