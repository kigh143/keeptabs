interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
  goals: string;
  color: string;
}

interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string;
  level_of_difficulty: number;
  expected_duration: number;
  started_date: string;
  end_date: string;
  completed: boolean;
}

interface user {
  name: string;
  email: string;
}
