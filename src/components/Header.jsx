import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary-600">SoftSell</div>
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </header>
  )
} 