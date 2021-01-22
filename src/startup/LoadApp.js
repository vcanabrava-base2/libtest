import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default ({component}) =>
{
    const [loading, setLoading] = useState(true);
    const auth = useContext(AuthContext);

    useEffect(() =>
    {
        const load = async () =>
        {
            await auth.load();
            setLoading(false);
        };

        load();
    }, [])

    if(loading) return null;
    else return React.createElement(component);
}