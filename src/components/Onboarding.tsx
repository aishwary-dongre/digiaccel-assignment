import React from 'react';

interface OnboardingProps {
  onGetStarted: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-600 flex flex-col">
      {/* Blue Background Section with Zigzag Pattern */}
      <div className="flex-1 relative overflow-hidden px-6 pt-12 pb-8">
        {/* Top Left Zigzag Pattern */}
        <div className="absolute top-8 left-6 w-20 h-20 opacity-30">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path
              d="M0 20 L10 10 L20 20 L30 10 L40 20 L50 10 L60 20 L70 10 L80 20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
            <path
              d="M0 40 L10 30 L20 40 L30 30 L40 40 L50 30 L60 40 L70 30 L80 40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
            <path
              d="M0 60 L10 50 L20 60 L30 50 L40 60 L50 50 L60 60 L70 50 L80 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Bottom Right Zigzag Pattern */}
        <div className="absolute bottom-8 right-6 w-24 h-24 opacity-30">
          <svg viewBox="0 0 96 96" className="w-full h-full">
            <path
              d="M0 20 L12 8 L24 20 L36 8 L48 20 L60 8 L72 20 L84 8 L96 20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
            <path
              d="M0 40 L12 28 L24 40 L36 28 L48 40 L60 28 L72 40 L84 28 L96 40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
            <path
              d="M0 60 L12 48 L24 60 L36 48 L48 60 L60 48 L72 60 L84 48 L96 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
            <path
              d="M0 80 L12 68 L24 80 L36 68 L48 80 L60 68 L72 80 L84 68 L96 80"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* White Bottom Section */}
      <div className="bg-white  px-8 py-10 shadow-2xl">
        <div className="max-w-md mx-auto text-center">
          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Manage What To Do
          </h1>
          <p className="text-gray-600 mb-10 leading-relaxed text-base">
            The best way to manage what you have to do. Don't forget your plans
          </p>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;