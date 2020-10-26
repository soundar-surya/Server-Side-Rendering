import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/usersListPage';
import NotFoundPage from './pages/NotFoundPage';
import adminsListPage from './pages/adminsListPage';


export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...adminsListPage,
                path:"/admins"
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage,
                path: '',
            }
        ]
    }
];

