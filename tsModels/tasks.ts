export interface Tasks {
  contacts: Task[];
}

export interface Task {
  id: string;
  contact_id: string;
  name: string;
  description: string;
  updated_at: string;
  created_at: string;
}
