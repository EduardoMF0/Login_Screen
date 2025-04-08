import Login from './Components/Login/Login.jsx'
import LoggedIn from './Components/LoggedIn-Page/LoggedIn.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

function App() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/loggedIn" element={<LoggedIn />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;