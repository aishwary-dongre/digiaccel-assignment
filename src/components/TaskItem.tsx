import React from 'react';
import { Clock, Trash2, Edit, Flag } from 'lucide-react';
import { Task } from '../types';
import { formatDateTime, getPriorityColor, getPriorityBgColor } from '../utils/dateUtils';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div
      className={`bg-white border rounded-xl p-4 transition-all ${
        task.status === 'Completed'
          ? 'border-gray-200 opacity-75'
          : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
            task.status === 'Completed'
              ? 'bg-indigo-600 border-indigo-600'
              : 'border-gray-300 hover:border-indigo-600'
          }`}
        >
          {task.status === 'Completed' && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4
              className={`font-semibold text-gray-900 ${
                task.status === 'Completed' ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </h4>
            {task.priority && (
              <span
                className={`${getPriorityBgColor(
                  task.priority
                )} ${getPriorityColor(
                  task.priority
                )} px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 flex-shrink-0`}
              >
                <Flag className="w-3 h-3" />
                {task.priority}
              </span>
            )}
          </div>

          {task.description && (
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{task.description}</p>
          )}

          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatDateTime(task.dateTime)}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <Edit className="w-3.5 h-3.5" />
              Edit
            </button>
            <button
              onClick={onDelete}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
