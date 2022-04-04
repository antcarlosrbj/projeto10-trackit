import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';
import Today from './components/Today';
import Habits from './components/Habits';
import Historic from './components/Historic';

import './css/reset.css';

function App() {

	const [token, setToken] = React.useState("");
	const [renderAgain, setRenderAgain] = React.useState([]);
	const [percentage, setPercentage] = React.useState(0);
	const [perfilImage, setPerfilImage] = React.useState("");

    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<Login setToken={setToken} setPerfilImage={setPerfilImage} />} />
				<Route path="/cadastro" element={<Signup />} />
				<Route path="/hoje" element={<Today token={token} setToken={setToken} renderAgain={renderAgain} setRenderAgain={setRenderAgain} percentage={percentage} setPercentage={setPercentage} perfilImage={perfilImage} />} />
				<Route path="/habitos" element={<Habits token={token} setToken={setToken} renderAgain={renderAgain} setRenderAgain={setRenderAgain} percentage={percentage} setPercentage={setPercentage} perfilImage={perfilImage} />} />
				<Route path="/historico" element={<Historic perfilImage={perfilImage} renderAgain={renderAgain} token={token} percentage={percentage} setPercentage={setPercentage} />} />
			</Routes>
		</BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));