import {
  startOfWeek,
  endOfWeek,
  format,
  isSameWeek,
  parseISO,
  isWithinInterval,
  addWeeks,
  subWeeks,
  startOfDay,
  endOfDay,
} from 'date-fns';
import { Task, WeekSummary } from '../types';

export const getWeekStart = (date: Date): Date => {
  return startOfWeek(date, { weekStartsOn: 1 }); // Monday
};

export const getWeekEnd = (date: Date): Date => {
  return endOfWeek(date, { weekStartsOn: 1 }); // Sunday
};

export const formatWeekRange = (weekStart: Date): string => {
  const weekEnd = getWeekEnd(weekStart);
  return `${format(weekStart, 'MMM dd')} - ${format(weekEnd, 'MMM dd, yyyy')}`;
};

export const isTaskInWeek = (task: Task, weekStart: Date): boolean => {
  const taskDate = typeof task.dateTime === 'string' ? parseISO(task.dateTime) : task.dateTime;
  return isSameWeek(taskDate, weekStart, { weekStartsOn: 1 });
};

export const groupTasksByWeek = (tasks: Task[]): WeekSummary[] => {
  const weekMap = new Map<string, WeekSummary>();

  tasks.forEach((task) => {
    const taskDate = typeof task.dateTime === 'string' ? parseISO(task.dateTime) : task.dateTime;
    const weekStart = getWeekStart(taskDate);
    const weekKey = weekStart.toISOString();

    if (!weekMap.has(weekKey)) {
      weekMap.set(weekKey, {
        weekStart,
        weekEnd: getWeekEnd(weekStart),
        openTasks: 0,
        completedTasks: 0,
        tasks: [],
      });
    }

    const weekSummary = weekMap.get(weekKey)!;
    weekSummary.tasks.push(task);

    if (task.status === 'Completed') {
      weekSummary.completedTasks++;
    } else {
      weekSummary.openTasks++;
    }
  });

  // Sort by week start date (most recent first)
  return Array.from(weekMap.values()).sort(
    (a, b) => b.weekStart.getTime() - a.weekStart.getTime()
  );
};

export const formatDateTime = (date: Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, "MMM dd, yyyy 'at' hh:mm a");
};

export const formatDate = (date: Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'yyyy-MM-dd');
};

export const formatTime = (date: Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'HH:mm');
};

export const getPriorityColor = (priority?: string): string => {
  switch (priority) {
    case 'High':
      return 'text-red-500';
    case 'Medium':
      return 'text-yellow-500';
    case 'Low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

export const getPriorityBgColor = (priority?: string): string => {
  switch (priority) {
    case 'High':
      return 'bg-red-100';
    case 'Medium':
      return 'bg-yellow-100';
    case 'Low':
      return 'bg-green-100';
    default:
      return 'bg-gray-100';
  }
};
