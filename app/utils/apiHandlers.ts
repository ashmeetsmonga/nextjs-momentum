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
