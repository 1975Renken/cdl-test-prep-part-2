// src/components/common/ErrorMessage.tsx
import React from 'react';
import { AlertCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  type?: 'error' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  type = 'error',
  dismissible = false,
  onDismiss,
  className = ''
}) => {
  // Style mappings for different message types
  const typeStyles = {
    error: {
      containerClass: 'bg-red-50 border-red-200 text-red-700',
      icon: <XCircle className="h-5 w-5 text-red-400" />,
      title: 'Error'
    },
    warning: {
      containerClass: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
      title: 'Warning'
    },
    info: {
      containerClass: 'bg-blue-50 border-blue-200 text-blue-700',
      icon: <Info className="h-5 w-5 text-blue-400" />,
      title: 'Info'
    }
  };

  const { containerClass, icon, title } = typeStyles[type];

  return (
    <div
      className={`
        flex items-start p-4 rounded-lg border
        ${containerClass}
        ${className}
      `}
      role="alert"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-3 flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="mt-1 text-sm">
          {message}
        </div>
      </div>
      {dismissible && onDismiss && (
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-offset-2 p-1.5 inline-flex h-8 w-8 items-center justify-center"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <span className="sr-only">Dismiss</span>
          <XCircle className="h-5 w-5 opacity-60 hover:opacity-100" />
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;