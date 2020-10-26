import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions';
import Helmet from 'react-helmet';

const UsersList =  () => {

    const dispatch = useDispatch();
    const state = useSelector(State =>State.users);

    useEffect(() => {
        dispatch(fetchUser());  
    }, [])

    const renderUsers = state.map(user => {
    return <li key={user.id}>{user.name}</li>
    });

    const head = () => {
        return(
            <Helmet>
            <title>{`${state.length} Users Loaded`}</title>
            <meta property="og:title" content="Users App" />
        </Helmet>
        );
    };

    return(
            <div>
                {head()}
                Here's a big list of users
                <ul>{renderUsers}</ul>
            </div>
            );
};

const loadData = store => store.dispatch(fetchUser());

export default {
    loadData,
    component: UsersList
};