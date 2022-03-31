import ReactDOM from 'react-dom';

/* import Header from './components/Header'; */
/* import Footer from './components/Footer'; */

import Login from './components/Login';

import './css/reset.css';

function App() {
    return (
        <>
            {/* <Header /> */}
            <Login />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));