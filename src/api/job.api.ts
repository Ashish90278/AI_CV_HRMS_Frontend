import axiosInstance from "./axiosInstance";

const JobAPI = {
  getAllJobs: () => axiosInstance.get("/jobs"),
  getJobById: (id: string) => axiosInstance.get(`/jobs/${id}`),
  createJob: (data: any) => axiosInstance.post("/jobs", data),
  updateJob: (id: string, data: any) => axiosInstance.patch(`/jobs/${id}`, data),
  deleteJob: (id: string) => axiosInstance.delete(`/jobs/${id}`),
};

export default JobAPI;