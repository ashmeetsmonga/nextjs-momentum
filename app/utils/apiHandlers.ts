import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/projects`);
  return data;
};

export const addProject = async (name: string, description: string) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/project`, {
    name,
    description,
  });
  return data;
};

export const deleteProject = async (projectId: string) => {
  const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/project`, {
    params: {
      projectId,
    },
  });
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

export const updateTask = async (taskId: string, title: string, description: string, status: string, priority: string) => {
  const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/task`, { taskId, title, description, status, priority });
  return data;
};

export const deleteTask = async (taskId: string) => {
  const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/task`, {
    params: {
      taskId,
    },
  });
  return data;
};
