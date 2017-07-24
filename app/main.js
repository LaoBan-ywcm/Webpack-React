import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter.js';
import './main.css';
import GreeterCss from './Greeter.css';

render(<Greeter className={GreeterCss.root} />, document.getElementById('root'));

