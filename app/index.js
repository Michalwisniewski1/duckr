import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

class Main extends React.Component {
    render() {
        return (
            <p>Hello World!</p>
        )
    }
};

ReactDOM.render(
    routes, document.getElementById('app'));
