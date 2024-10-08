import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import CloudUpload from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";
import { Backdrop } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  job: {
    jobId: string;
  };
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  job,
}) => {
  const [formData, setFormData] = useState({
    jobId: "",
    education: "",
    workExperience: "",
    coverLetter: "",
  });
  const [file, setFile] = useState<any>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSendClick = async () => {
    var token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("Only members can apply for jobs. Please register or login.");
      return;
    }

    if (!formData.education || !formData.workExperience || !file) {
      toast.error("Please, enter all required fields.");
      return;
    }
    try {
      const fData = new FormData();
      fData.append("jobId", job.jobId);
      fData.append("education", formData.education);
      fData.append("workExperience", formData.workExperience);
      fData.append("coverLetter", formData.coverLetter);
      fData.append("cv", file);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/applications/submitApp`,
        fData,
        { headers: { Authorization: "Bearer " + token } }
      );
      if (response.status === 200) {
        toast.success("Application submitted successfully");
        onClose();
      } else {
        toast.error("Error submitting application");
      }
    } catch (error) {
      toast.error("Error submitting application");
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      BackdropComponent={(props) => (
        <Backdrop
          {...props}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Prozirna tamna pozadina
            backdropFilter: "blur(10px)", // Blur efekat
          }}
        />
      )}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#175e5e", fontWeight: "bold" }}
        >
          A few steps to Your dream Job..
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {" "}
        </Box>

        <TextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Work Experience"
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Cover letter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          multiline
          rows={8}
          fullWidth
          margin="normal"
        />

        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload sx={{ fontSize: "24px" }} />}
          sx={{
            backgroundColor: "#175e5e",
            color: "#fff",
            padding: "8px 14px",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "3px",
            textTransform: "none",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#88a097",
            },
          }}
        >
          Upload CV
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>

        {file && (
          <section
            style={{
              marginTop: "12px",
              color: "#175e5e",
              fontWeight: "bold",
            }}
          >
            File name: {file.name}
          </section>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#a9a965e3",
              color: "#fff",
              width: "120px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#8c8c42",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSendClick}
            sx={{
              backgroundColor: "#175e5e",
              color: "#fff",
              width: "120px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#0f4c4c",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              },
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicationModal;
