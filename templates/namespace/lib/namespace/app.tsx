###hopplaconfig {
    exclude: <%= JSON.stringify(!!input.isNode) %>
  } hopplaconfig###

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

render(<App />, document.querySelector('#app'))