import React from 'react';

//static router renames the prop context into staticContext
const NotFoundPage = ( { staticContext= {} } ) => {
    staticContext.notFound = true;
    return <h2 style={{ marginTop: '200px' }} className="center-align brand-logo">Oops, route not found.</h2>;
};

export default {
    component: NotFoundPage
};