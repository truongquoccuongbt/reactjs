import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'));
export default () => 
(
	<BrowserRouter>
		<Route path="/Home" component={Home} />
	</BrowserRouter>
);