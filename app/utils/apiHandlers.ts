import axios from "axios";

export const getProjectDetails = async (projectId: string) => {
  const { data } = await axios.get("http://localhost:3000/api/auth/project", {
    params: {
      projectId,
    },
  });
  return data;
};
