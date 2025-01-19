import axios from "axios";

export const getProjectDetails = async (projectId: string) => {
  const { data } = await axios.get("http://localhost:3000/api/auth/project", {
    params: {
      projectId,
    },
  });
  return data;
};

export const updateProjectDetails = async (name: string, description: string, projectId: string) => {
  const { data } = await axios.put("/api/auth/project", {
    name,
    description,
    projectId,
  });

  return data;
};

export const addTask = async (title: string, description: string, projectId: string, status: string, priority: string) => {
  const { data } = await axios.post("/api/auth/task", { title, description, projectId, status, priority });
  return data;
};
