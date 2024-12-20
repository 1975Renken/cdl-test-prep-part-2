// src/components/layout/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  BarChart2,
  Settings,
  Crown,
  Clock,
  Star,
  Bookmark,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isPremium?: boolean;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  badge?: string | number;
  premiumOnly?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  isPremium = false,
  isCollapsed = false,
  onToggleCollapse,
  className = ''
}) => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      name: 'Practice Tests',
      path: '/practice',
      icon: <ClipboardCheck className="h-5 w-5" />
    },
    {
      name: 'Study Guide',
      path: '/study',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: 'Progress',
      path: '/progress',
      icon: <BarChart2 className="h-5 w-5" />,
      premiumOnly: true
    },
    {
      name: 'Test History',
      path: '/history',
      icon: <History className="h-5 w-5" />
    },
    {
      name: 'Bookmarks',
      path: '/bookmarks',
      icon: <Bookmark className="h-5 w-5" />,
      badge: 3
    },
    {
      name: 'Recent Tests',
      path: '/recent',
      icon: <Clock className="h-5 w-5" />
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-white border-r border-gray-200',
        isCollapsed ? 'w-16' : 'w-64',
        'transition-all duration-300 ease-in-out',
        className
      )}
    >
      {/* Premium Banner - Only show if not premium and not collapsed */}
      {!isPremium && !isCollapsed && (
        <div className="p-4 mb-4">
          <Button
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
          >
            <Crown className="h-4 w-4 mr-2" />
            Upgrade to Pro
          </Button>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          if (item.premiumOnly && !isPremium) {
            return (
              <div
                key={item.path}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md opacity-50 cursor-not-allowed',
                    isCollapsed ? 'justify-center' : 'justify-between'
                  )}
                >
                  <div className="flex items-center">
                    {item.icon}
                    {!isCollapsed && <span className="ml-3">{item.name}</span>}
                  </div>
                  {!isCollapsed && <Crown className="h-4 w-4 text-yellow-500" />}
                </Link>
                {!isCollapsed && (
                  <div className="hidden group-hover:block absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded">
                    Premium Feature
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                isCollapsed ? 'justify-center' : 'justify-between'
              )}
            >
              <div className="flex items-center">
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </div>
              {!isCollapsed && item.badge && (
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/settings"
          className={cn(
            'flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            isCollapsed ? 'justify-center' : ''
          )}
        >
          <Settings className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Settings</span>}
        </Link>
      </div>

      {/* Collapse Button */}
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className="p-2 m-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      )}
    </div>
  );
};

export default Sidebar;