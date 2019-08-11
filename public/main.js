// const el = document.getElementById('root');

// el.innerHTML = "<h1>hello world</h1>";

import React from 'react';
import { render } from 'react-dom';

import './custom.scss';

render(<h1 className="red">Hello, World</h1>, document.getElementById('root'));
