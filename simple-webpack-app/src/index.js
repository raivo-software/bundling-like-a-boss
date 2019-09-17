import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import DefaultHello, { goodmorningWorld, goodafternoonWorld } from './helloWorld';

goodmorningWorld();
goodafternoonWorld();
DefaultHello();

const container = document.getElementById('app');
ReactDOM.render(<App />, container);