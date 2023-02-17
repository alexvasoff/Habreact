import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router';

const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="wrapper">
                            {element}
                        </div>
                        )}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
