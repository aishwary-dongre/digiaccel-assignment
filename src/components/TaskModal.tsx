import React, { useEffect } from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Task, Priority } from '../types';
import { formatDate, formatTime } from '../utils/dateUtils';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  priority: z.enum(['Low', 'Medium', 'High']).optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; description?: string; dateTime: Date; priority?: Priority }) => void;
  task?: Task | null;
  mode: 'create' | 'edit';
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit, task, mode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    if (task && mode === 'edit') {
      const taskDate = typeof task.dateTime === 'string' ? new Date(task.dateTime) : task.dateTime;
      setValue('title', task.title);
      setValue('description', task.description || '');
      setValue('date', formatDate(taskDate));
      setValue('time', formatTime(taskDate));
      setValue('priority', task.priority);
    } else {
      reset();
    }
  }, [task, mode, setValue, reset]);

  const handleFormSubmit = (data: TaskFormData) => {
    const dateTime = new Date(`${data.date}T${data.time}`);
    onSubmit({
      title: data.title,
      description: data.description,
      dateTime,
      priority: data.priority,
    });
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="bg-white rounded-t-xl w-full max-w-md max-h-[85vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white px-5 py-4 flex items-center justify-between border-b border-gray-100 rounded-t-3xl">
          <h2 className="text-lg font-bold text-gray-900">
            {mode === 'create' ? 'Add New Task' : 'Edit Task'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task title
            </label>
            <input
              type="text"
              {...register('title')}
              placeholder="Doing Homework"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Set Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Set Time
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="time"
                  {...register('time')}
                  placeholder="Start"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="time"
                  placeholder="Ends"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50"
                  disabled
                />
              </div>
            </div>
            {errors.time && (
              <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Set Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Set Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                {...register('date')}
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register('description')}
              placeholder="Add Description"
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-lg font-semibold text-base hover:bg-indigo-700 transition-colors shadow-lg mt-6"
          >
            Create task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;