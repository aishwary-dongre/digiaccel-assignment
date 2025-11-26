import React from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { WeekSummary } from '../types';
import { formatWeekRange } from '../utils/dateUtils';

interface WeekCardProps {
  week: WeekSummary;
  isExpanded: boolean;
  onToggle: () => void;
}

const WeekCard: React.FC<WeekCardProps> = ({ week, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      {/* Week Header */}
      <div
        onClick={onToggle}
        className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {formatWeekRange(week.weekStart)}
          </h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>

        {/* Task Stats */}
        <div className="flex items-center gap-6">
          {/* Completed Tasks */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{week.completedTasks}</p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
          </div>

          {/* Open Tasks */}
          <div className="flex items-center gap-2">
            <div className="bg-red-100 p-2 rounded-lg">
              <Circle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{week.openTasks}</p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="text-xs text-gray-600 mb-2 font-medium">Weekly Progress</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{
                width: `${
                  week.completedTasks + week.openTasks > 0
                    ? (week.completedTasks / (week.completedTasks + week.openTasks)) * 100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCard;
