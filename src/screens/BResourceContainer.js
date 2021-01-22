import React, { useContext, useEffect } from 'react';
import RestrictedContext from '../contexts/RestrictedContext';
import BResourcePresenter from './layouts/BResourceLayout';
import strings from './strings';

export default ({navigation}) =>
{
    const restricted = useContext(RestrictedContext);
    useEffect(() => { restricted.getContent('B');}, []);

    const screen =
    (
        <BResourcePresenter 
            title={restricted.title}
            onClickBack={() => navigation.goBack()}
        />
    )

    return screen;
}