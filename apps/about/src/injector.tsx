import App, { AppProps } from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

export const inject = (parentElementId: string, props: AppProps) => {
  const root = createRoot(document.getElementById(parentElementId)!);
  root.render(<App {...props} />);

  return () => {
    root.unmount();
  };
};
