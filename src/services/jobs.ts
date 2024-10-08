import appAxios from "./appAxios";
import { Job } from "../utils/types";

const getJobs = async (): Promise<Job[]> => {
  try {
    const response = await appAxios.get(`/jobs/`);
    const data = response.data;
    console.log(data, "dataaaaaa");

    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

const getJobsByCompanyId = async (companyId: string): Promise<Job[]> => {
  try {
    const response = await appAxios.get(`/jobs/company/${companyId}`);
    const data = response.data;
    console.log(data, "dataaaaaa");

    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};
const submitApplication = async (formData: any): Promise<void> => {
  try {
    const response = await appAxios.post(`/applications/submitApp`, formData);
    console.log("Application submitted:", response.data);
  } catch (error: any) {
    console.error("Error submitting application:", error);
    if (error.response) {
      console.error("Server responded with:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received from the server.");
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};

const addJob = async (job: Job): Promise<Job> => {
  return appAxios.post("/jobs/createJob", job).then((response) => {
    const data = response.data;
    console.log("JOB ADDED IS ", data);

    return data;
  });
};

const updateJob = async (job: Job) => {
  return await appAxios.put(`/jobs/${job.jobId}`, job);
};

const deleteJob = async (id: String) => {
  return await appAxios.delete(`/jobs/${id}`);
};

export default {
  getJobs,
  getJobsByCompanyId,
  submitApplication,
  addJob,
  updateJob,
  deleteJob,
};
