import React, { useState } from 'react';
import { Search, Plus, Settings } from 'lucide-react';
import { useTaskStore } from '../store/taskStore';
import { groupTasksByWeek } from '../utils/dateUtils';
import WeekCard from '../components/WeekCard';
import TaskItem from '../components/TaskItem';
import TaskModal from '../components/TaskModal';
import { Task, Priority } from '../types';

const Home: React.FC = () => {
  const {
    tasks,
    searchQuery,
    setSearchQuery,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    getFilteredTasks,
  } = useTaskStore();

  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  const filteredTasks = getFilteredTasks();
  const weekSummaries = groupTasksByWeek(filteredTasks);

  const handleToggleWeek = (weekKey: string) => {
    setExpandedWeek(expandedWeek === weekKey ? null : weekKey);
  };

  const handleAddTask = () => {
    setModalMode('create');
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setModalMode('edit');
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSubmitTask = (data: {
    title: string;
    description?: string;
    dateTime: Date;
    priority?: Priority;
  }) => {
    if (modalMode === 'edit' && editingTask) {
      updateTask(editingTask.id, data);
    } else {
      addTask(data);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a task"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Week Calendar */}
          <div className="flex items-center justify-between gap-1.5 overflow-x-auto pb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const today = new Date();
              const currentDay = today.getDay();
              const isToday = (currentDay === 0 ? 6 : currentDay - 1) === index;
              const date = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate() - (currentDay === 0 ? 6 : currentDay - 1) + index
              );

              return (
                <div
                  key={day}
                  className={`flex-shrink-0 flex flex-col items-center justify-center w-12 h-16 rounded-lg transition-all ${
                    isToday
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className="text-xs font-medium">{day.substring(0, 2)}</div>
                  <div className="text-lg font-bold mt-0.5">{date.getDate()}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Task Stats Cards */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Task Complete Card */}
          <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Task Complete</div>
              <div className="text-2xl font-bold text-gray-900">
                {tasks.filter(t => t.status === 'Completed').length}
              </div>
              <div className="text-xs text-gray-500 mt-1">This Week</div>
            </div>
          </div>

          {/* Task Pending Card */}
          <div className="bg-red-50 rounded-2xl p-4 flex items-start gap-3">
            <div className="bg-red-500 p-2 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Task Pending</div>
              <div className="text-2xl font-bold text-gray-900">
                {tasks.filter(t => t.status === 'In Progress').length}
              </div>
              <div className="text-xs text-gray-500 mt-1">This Week</div>
            </div>
          </div>
        </div>

        {/* Weekly Progress Section */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-gray-900 mb-3">Weekly Progress</h3>
          <div className="bg-indigo-600 h-2 rounded-full"></div>
        </div>

        {/* Tasks Today Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-gray-900">Tasks Today</h3>
            <button className="text-sm text-indigo-600 font-medium">View All</button>
          </div>

          {weekSummaries.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No tasks yet. Add your first task!</p>
            </div>
          ) : (
            <div className="space-y-3 pb-24">
              {tasks.slice(0, 4).map((task) => (
                <div key={task.id} className="bg-white rounded-xl p-4 flex items-start gap-3">
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      task.status === 'Completed'
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {task.status === 'Completed' && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-medium ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                      {task.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => handleEditTask(task)} className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button onClick={() => handleDeleteTask(task.id)} className="text-gray-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleAddTask}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center z-50"
      >
        <Plus className="w-7 h-7" />
      </button>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitTask}
        task={editingTask}
        mode={modalMode}
      />
    </div>
  );
};

export default Home;