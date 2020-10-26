import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default () => {

    const state = useSelector(State => State.auth);
    const dispatch = useDispatch();

    const authButton = state ? (
        <a href="/api/logout" className="black-text">Logout</a>
    ) :
    (
        <a href="/api/auth/google" className="black-text">Login</a>
    );

    return(
        <nav>
            <div className="nav-wrapper blue lighten-5">
                <Link to="/" className="brand-logo black-text">React SSR</Link>
                <ul className="right blue lighten-5">
                        <li><Link to="/users" className="black-text">Users</Link></li>
                        <li><Link to="/admins" className="black-text">Admins</Link></li>
                        <li> {authButton}</li>
                </ul>
            </div>
            </nav>
    );
};