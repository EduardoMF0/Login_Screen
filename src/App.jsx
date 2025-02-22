import Form from './Components/Form/Form.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

function App() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;