import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/projects`);
  return data;
};

export const getProjectDetails = async (projectId: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/project`, {
    params: {
      projectId,
    },
  });
  return data;
};

export const updateProjectDetails = async (name: string, description: string, projectId: string) => {
  const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/project`, {
    name,
    description,
    projectId,
  });

  return data;
};

export const addTask = async (title: string, description: string, projectId: string, status: string, priority: string) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/task`, { title, description, projectId, status, priority });
  return data;
};
