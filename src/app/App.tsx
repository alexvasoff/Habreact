import React, { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppRouter from './providers/router';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
  return (
      <div className={classNames('app', {}, [])}>
          <Suspense fallback="">
              <Navbar />
              <div className="content">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
};

export default App;
