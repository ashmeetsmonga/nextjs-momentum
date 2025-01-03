interface TokenPayload {
  id: string;
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
  owner: {
    name: string;
  };
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assigneeId: string;
  projectId: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: {
    name: string;
  };
}
