import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';

import './css/reset.css';

function App() {
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Signup />} />
			</Routes>
		</BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));