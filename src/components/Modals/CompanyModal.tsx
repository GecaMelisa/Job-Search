import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateCompany } from "../../hooks/useCreateCompany";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { toast } from "react-toastify";

type Props = {
  onCancel: () => void;
  companyOwners: any;
};

export type CompanyCreation = {
  companyName: string;
  companyOwnerId: string;
  address: string;
  phone: string;
  email: string;
  companyDescription: string;
};

const CompanyModal: React.FC<Props> = ({ onCancel, companyOwners }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyCreation>({});
  const [companyName, setCompanyName] = useState("");
  const [companyOwnerId, setCompanyOwnerId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const { mutate: addCompany } = useCreateCompany();

  const handleCreateCompany = async () => {
    if (
      !companyName ||
      !companyOwnerId ||
      !address ||
      !phone ||
      !email ||
      !companyDescription
    ) {
      toast.error("Please enter all required fields");
      return;
    }
    const company = {
      companyName,
      companyOwnerId,
      address,
      phone,
      email,
      description: companyDescription,
    };
    addCompany(company);
    toast.success("Company created successfully");
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
            {...register("companyName", { required: "This field is required" })}
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Company Decription"
            variant="outlined"
            {...register("companyDescription", {
              required: "This field is required",
            })}
            error={!!errors.companyDescription}
            helperText={errors.companyDescription?.message}
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth>
            <InputLabel id="company-owner-id">Company owner</InputLabel>
            <Select
              labelId="company-owner-id"
              label="Company Owner"
              variant="outlined"
              {...register("companyOwnerId", {
                required: "This field is required",
              })}
              error={!!errors.companyOwnerId}
              // helperText={errors.companyId?.message}
              value={companyOwnerId}
              onChange={(e) => setCompanyOwnerId(e.target.value)}
              fullWidth
              // margin="normal"
            >
              {companyOwners.map((companyOwner: any) => {
                return (
                  <MenuItem value={companyOwner.id}>
                    {companyOwner.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            label="Address"
            variant="outlined"
            {...register("address", { required: "This field is required" })}
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
            {...register("phone", { required: "This field is required" })}
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
            {...register("email", { required: "This field is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />

          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button
              onClick={onCancel}
              sx={{
                backgroundColor: "#a9a965e3",
                color: "#fff",
                width: "130px",
                height: "45px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateCompany}
              sx={{
                backgroundColor: "#175e5e",
                color: "#fff",
                width: "130px",
                height: "45px",
              }}
            >
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyModal;
