import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions';


export default () => {

    const dispatch = useDispatch();
    const state = useSelector(State =>State.users);

    useEffect(() => {
        dispatch(fetchUser());  
    }, [])

    const renderUsers = state.map(user => {
    return <li key={user.id}>{user.name}</li>
    });

    return(
            <div>Here's a big list of users
                <ul>{renderUsers}</ul>
            </div>
            );
};