'use client';

import { useEffect } from 'react';

const StagewiseDevToolbar = () => {
  useEffect(() => {
    // Only initialize the toolbar in development mode
    if (process.env.NODE_ENV === 'development') {
      const initToolbar = async () => {
        try {
          // Dynamically import the stagewise toolbar
          const { StagewiseToolbar } = await import('@stagewise/toolbar-next');
          
          // Basic configuration with empty plugins array
          const stagewiseConfig = {
            plugins: []
          };

          // Check if toolbar is already initialized to avoid duplicates
          if (!document.getElementById('stagewise-toolbar-root')) {
            // Create a container for the toolbar
            const toolbarRoot = document.createElement('div');
            toolbarRoot.id = 'stagewise-toolbar-root';
            document.body.appendChild(toolbarRoot);

            // Initialize the toolbar
            const { createRoot } = await import('react-dom/client');
            const root = createRoot(toolbarRoot);
            const { createElement } = await import('react');
            
            root.render(createElement(StagewiseToolbar, { config: stagewiseConfig }));
          }
        } catch (error) {
          // Silently handle the error - package might not be available
          console.warn('Stagewise toolbar not available:', error instanceof Error ? error.message : 'Unknown error');
        }
      };

      // Initialize after a small delay to ensure DOM is ready
      const timeoutId = setTimeout(initToolbar, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return null;
};

export default StagewiseDevToolbar; 