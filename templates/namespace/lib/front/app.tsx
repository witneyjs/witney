import React from 'react';
import { render } from 'react-dom';

import './styles/app.pcss';
import './styles/app.scss';

const App = function() {
    return <>
        <h1>
            <%= input.id %>
        </h1>
        <p>
            <%= input.id %>
        </p>
    </>
}

render(<App />, document.querySelector('#app'));

// TODO: Finish this and use env variables
var client = new Faye.Client('http://localhost:8000/');

client.subscribe('/messages', function(message) {
    alert('Got a message: ' + message.text);
});