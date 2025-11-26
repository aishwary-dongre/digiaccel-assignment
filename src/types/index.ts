export type Priority = 'Low' | 'Medium' | 'High';
export type TaskStatus = 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  dateTime: Date;
  priority?: Priority;
  status: TaskStatus;
  createdAt: Date;
}

export interface WeekSummary {
  weekStart: Date;
  weekEnd: Date;
  openTasks: number;
  completedTasks: number;
  tasks: Task[];
}
