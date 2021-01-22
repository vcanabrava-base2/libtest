import React from 'react';
import Restricted from '../api/Restricted';

const Context = React.createContext({});

export class RestrictedStore extends React.Component
{
    state = {title: ''}

    render = () =>
    (
        <Context.Provider value={{...this.state, getContent: this.getContent}}>
            {this.props.children}
        </Context.Provider>
    )

    getContent = async id =>
    {
        const {data} = await Restricted.get(id);
        this.setState({title: data.title});
    } 
}

export default Context;