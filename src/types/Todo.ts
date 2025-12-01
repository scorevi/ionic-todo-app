export interface Todo {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
